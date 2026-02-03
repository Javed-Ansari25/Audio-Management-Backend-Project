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
import audioRouter from "./route/audio.route.js"
import userRouter from "./route/auth.route.js"

// route declaration
app.use("/api/v1/artist", audioRouter);
app.use("/api/v1/users", userRouter);


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
