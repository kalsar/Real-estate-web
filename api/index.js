import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

   dotenv.config();


    
    mongoose.connect(process.env.MONGO)
    .then( ()=>{
        console.log("connected to db");
    }).catch( (err)=>{
        console.log(err);

    });

    const app=express();
    app.use(express.json());
    app.use(cookieParser());
    app.listen(3000 ,()=>{
        console.log("Server is running on port:3000!");
    });

    
    app.use("/api/user",userRouter);
    app.use("/api/auth",authRouter);

    // this is meddle ware to hanlde error 

    app.use( (err, req, res, next)=>{
        const statusCode=err.statusCode || 500;
        const message=err.message || 'Internal server error';
        return res.status(statusCode).json({
            success: false,
            statusCode,
            message,
        });
    });

    // req:- req is tha data that we get from client side(from browser)

    // resp:- resp is tha data that we send back from server side(from database)