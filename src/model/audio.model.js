import mongoose from "mongoose";

const audioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description : {
      type: String,
      required: true
    },

    fileUrl: {
      type: String,
      required: true
    },

    // fileType: {
    //   type: String,
    //   enum: ["audio/mpeg", "audio/wav", "audio/mp3"]
    // },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export const Audio = mongoose.model("Audio", audioSchema);
