import verifyJWT from "../middlewares/auth.middleware.js";
import authorize from "../middlewares/authorize.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { uploadAudio, deleteAudioById } from "../controller/audio.controllers.js";
import { Router } from "express";

const router = Router();
router.use(verifyJWT) // apply all routes

// route
router.route("/upload-audio")
.post(
    authorize("ADMIN"),
    upload.single("audio"),
    uploadAudio
)

router.route("/delete-audio/:audioId")
.delete(
    authorize("ADMIN"),
    deleteAudioById
)

export default router
