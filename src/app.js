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
import userRouter from "./route/user.route.js"

// route declaration
app.use("/api/v1/admin", audioRouter);
app.use("/api/v1/users", userRouter);

export default app

