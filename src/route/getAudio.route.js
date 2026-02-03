import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import { getAudio } from "../controller/getsAudio.js";

const router = Router();
router.use(verifyJWT)

// route
router.route("/get-audio").get(getAudio);

export default router
