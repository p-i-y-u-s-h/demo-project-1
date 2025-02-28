const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup",async(req,res)=>{
    const {email,password ,firstName,lastName} = req.body;

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"Signup succeeded"
    })

})

userRouter.post("/signin",async (req,res)=>{
    const {email,password} = req.body;

    const user = await userModel.findOne({
        email:email,
        password:password
    });

    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD)

        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
})

userRouter.get("/purchases",userMiddleware,async (req,res)=>{
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })

    res.json({
        purchases
    })
})

module.exports = {
    userRouter:userRouter
}