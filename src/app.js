import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());
app.use(express.static("public"));

// import route 
import postAudioRouter from "./route/postAudio.route.js"
import userRouter from "./route/auth.route.js"
import getAudioRouter from "./route/getAudio.route.js"

// route declaration
app.use("/api/v1/artist", postAudioRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/music", getAudioRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || "Internal Server Error",
    errors: err.errors || []
  });
});

export default app
