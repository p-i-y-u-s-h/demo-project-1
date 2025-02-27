const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "user_pass";

const userRouter = Router();

userRouter.post("/singup",async(req,res)=>{
    const {email,password ,firstName,lastName} = req.body;

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"Singup succeeded"
    })

})

userRouter.post("/singin",async (req,res)=>{
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

userRouter.get("/purchases",(req,res)=>{

})

module.exports = {
    userRouter:userRouter
}