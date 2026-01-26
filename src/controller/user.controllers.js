import { Audio } from '../model/audio.model.js';
import { User } from '../model/user.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if(!user) {
      throw new ApiError(401, "UnAuthorization user");
    }

    const accessToken = user.accessTokenGenerate();
    const refreshToken = user.refreshTokenGenerate();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, 'Failed to generate tokens');
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, 'User already exists');
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
    role: "USER",
  });

  const userResponse = user.toObject();
  delete userResponse.password;
  // delete userResponse.refreshToken;

  return res
    .status(201)
    .json(new ApiResponse(201, userResponse, 'User registered successfully'));
});

const loginUser = asyncHandler(async (req, res) => {
  const {email, username, password } = req.body;

  if (!username) {
    throw new ApiError(400, 'Username is required');
  }

  if (!password) {
    throw new ApiError(400, 'Password is required');
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  }).select("+password");

  if (!user) {
    throw new ApiError(404, 'User does not exist');
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid password');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  const userResponse = user.toObject();
  delete userResponse.password;
  delete userResponse.refreshToken;

  const cookieOptions = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: userResponse, accessToken, refreshToken },
        'User logged in successfully',
      ),
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    },
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User logged out successfully'));
});

const regenerateAccessAndRefreshToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, 'Unauthorized request');
  }

  const decoded = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET,
  );
  const user = await User.findById(decoded._id);

  if (!user || incomingRefreshToken !== user.refreshToken) {
    throw new ApiError(401, 'Invalid or expired refresh token');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(200, { accessToken, refreshToken }, 'Token refreshed'),
    );
});

const getAudioFile = asyncHandler(async (req, res) => {
  const audio = await Audio.find({ isActive: true })
  .populate("uploadedBy", "username email")

  return res
    .status(200)
    .json(new ApiResponse(200, audio, 'Audio fetched successfully'));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  regenerateAccessAndRefreshToken,
  getAudioFile,
};
