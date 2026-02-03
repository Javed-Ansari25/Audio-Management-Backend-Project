import verifyJWT from "../middlewares/auth.middleware.js";
import authorize from "../middlewares/authorize.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { uploadAudio, deleteAudioById, updateAudioDetails } from "../controller/postAudio.controllers.js";
import { Router } from "express";

const router = Router();

// apply all routes
router.use(verifyJWT) 
router.use(authorize("artist", "admin"));

// route
router.route("/upload-audio").post(
    upload.single("audio"),
    uploadAudio
)

router.route("/delete-audio/:audioId").delete(deleteAudioById)
router.route("/update/:audioId").patch(updateAudioDetails);

export default router
