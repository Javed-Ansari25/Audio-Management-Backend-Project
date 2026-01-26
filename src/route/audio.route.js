import verifyJWT from "../middlewares/auth.middleware.js";
import authorize from "../middlewares/authorize.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { uploadAudio, deleteAudioById, updateAudioDetails } from "../controller/audio.controllers.js";
import { Router } from "express";

const router = Router();
// apply all routes
router.use(verifyJWT) 
router.use(authorize("ADMIN"));

// route
router.route("/upload-audio").post(
    upload.single("audio"),
    uploadAudio
)

router.route("/delete-audio/:audioId").delete(deleteAudioById)
router.route("/update/:audioId").patch(updateAudioDetails);

export default router
