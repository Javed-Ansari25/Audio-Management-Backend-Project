import { Audio } from "../model/audio.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";
import mongoose from "mongoose";

const uploadAudio = asyncHandler(async (req, res) => {
    // if (req.user.role !== "artist") {
    //   throw new ApiError(403, "You are not allowed to upload audio. Only artist can upload.");
    // }

    const {title, description} = req.body;
    if(!title || !description) {
      throw new ApiError(400, "All field are required");
    }

    const audioLocalFile = req?.file?.path;
    const audioUpload = await uploadOnCloudinary(audioLocalFile);

    if (!audioUpload?.url) {
      throw new ApiError(400, "audio upload failed");
    }

    const audio = await Audio.create({
      title,
      description,
      fileUrl : audioUpload.url,
      artist: req?.user._id
    })

    const audioResponse = {
      _id: audio._id,
      title: audio.title,
      description: audio.description,
      artist: audio.role,
      fileUrl: audio.fileUrl
    };

    return res.status(201).json(
      new ApiResponse(201, audioResponse, "Audio upload successfully")
    )
})

const deleteAudioById = asyncHandler(async (req, res) => {
    const { audioId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(audioId)) {
        throw new ApiError(400, "Invalid AudioId");
    }

    const filter = req.user.role === "admin" ? {_id: audioId} : {_id: audioId, artist: req?.user._id};
    const deletedAudio = await Audio.findOneAndDelete(filter);

    if (!deletedAudio) {
      throw new ApiError(403,
        req.user.role === "admin" ? "Audio not found" : "You are not allowed to delete this audio"
      );
    }

    return res.status(200).json(
      new ApiResponse(200, {}, "Audio file deleted successfully")
    );
});

const updateAudioDetails = asyncHandler(async (req, res) => {
  const { audioId } = req.params;
  const { title, description, fileUrl } = req.body;

  if (!mongoose.Types.ObjectId.isValid(audioId)) {
    throw new ApiError(400, "Invalid Audio ID");
  }

  const filter = req.user.role === "admin" ? { _id: audioId } : {_id: audioId, artist: req.user._id};

  const audio = await Audio.findOneAndUpdate(
    filter,
    { $set: { title, description, fileUrl } },
    { new: true ,  projection: { title: 1, description: 1 }}
  );

  if (!audio) {
    throw new ApiError(403,
      req.user.role === "admin"? "Audio not found" : "You are not allowed to update this audio"
    );
  }

  return res.status(200).json(
    new ApiResponse(200, audio, "Audio details updated successfully")
  );
});

export {uploadAudio, deleteAudioById, updateAudioDetails}
