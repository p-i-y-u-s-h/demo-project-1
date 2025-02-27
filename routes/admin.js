const { Router } = require("express");
const { adminModel } = require("../db")
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "admin_pass";

adminRouter.post("/singup",async(req,res)=>{

    const {email,password ,firstName,lastName} = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"Singup succeeded"
    })

})

adminRouter.post("/singin",async(req,res)=>{

    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email:email,
        password:password
    });

    if(admin){
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD)

        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

})

adminRouter.post("/course",(req,res)=>{

})

adminRouter.put("/course",(req,res)=>{

})

adminRouter.get("/course/bulk",(req,res)=>{

})

module.exports = {
    adminRouter:adminRouter
}