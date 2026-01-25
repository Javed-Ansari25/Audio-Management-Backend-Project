import { Audio } from "../model/audio.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

const uploadAudio = asyncHandler(async (req, res) => {
    const {title, description} = req.body;

    if(!title || !description) {
        throw new ApiError(400, "All field are required");
    }

    const fileUrl = req?.file?.path;
    const audio = await Audio.create({
        title,
        description,
        fileUrl,
        uploadedBy: req?.user._id
    })

    return res.status(201).json(
        new ApiResponse(201, audio, "Audio upload successfully")
    )
})

const deleteAudioById = asyncHandler(async (req, res) => {
    const { audioId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(audioId)) {
        throw new ApiError(400, "Invalid AudioId");
    }

    const deletedAudio = await Audio.findOneAndDelete({ _id: audioId });

    if (!deletedAudio) {
        throw new ApiError(404, "Audio file not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Audio file deleted successfully")
    );
});


export {uploadAudio, deleteAudioById}
