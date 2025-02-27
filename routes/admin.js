const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

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

adminRouter.post("/course",adminMiddleware,async(req,res)=>{
    const adminId = req.userId;

    const {title,description ,imageUrl,price}=req.body;
    
    await courseModel.create({
        title:title,
        description:description ,
        imageUrl:imageUrl,
        price:price,
        creatorId:creatorId
    })

    res.json({
        message:"Course created",
        courseId:course.id
    })
})

adminRouter.put("/course",(req,res)=>{

})

adminRouter.get("/course/bulk",(req,res)=>{

})

module.exports = {
    adminRouter:adminRouter
}