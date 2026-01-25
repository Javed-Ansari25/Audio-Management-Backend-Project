import { Router } from "express";
import { 
  registerUser, 
  loginUser,
  logoutUser,
  regenerateAccessAndRefreshToken,
  getAudioFile 
} from "../controller/user.controllers.js";

import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(regenerateAccessAndRefreshToken);
router.route("/get-audio").get(verifyJWT, getAudioFile);

export default router;
