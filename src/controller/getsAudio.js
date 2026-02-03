import { Audio } from "../model/audio.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAudio = asyncHandler(async (req, res) => {
  const audio = await Audio.find({ isActive: true })
  .populate("artist", "username email")

  if (!audio) {
    throw new ApiError(404, "Audio not Found")
  }

  return res
    .status(200)
    .json(new ApiResponse(200, audio, 'Audio fetched successfully'));
});

export {getAudio}