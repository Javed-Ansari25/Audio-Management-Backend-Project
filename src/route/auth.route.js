import { Router } from "express";
import loginLimiter from "../middlewares/loginRateLimiter.middleware.js";
import verifyJWT from "../middlewares/auth.middleware.js";

import { 
  registerUser, 
  loginUser,
  logoutUser,
  regenerateAccessAndRefreshToken,
  getAudio
} from "../controller/auth.controllers.js";

const router = Router();

// routes
router.route("/register").post(registerUser);
router.route("/login").post(loginLimiter, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(regenerateAccessAndRefreshToken);
router.route("/get-audio").get(verifyJWT, getAudio);

export default router;
