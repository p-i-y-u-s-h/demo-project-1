const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { userModel, purchaseModel, courseModel } = require("../db");

const coursesRouter = Router();

coursesRouter.post("/purchases",userMiddleware,async (req,res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message:"ypu have successfully bought the course"
    })
})

coursesRouter.get("/preview",async (req,res)=>{
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})

module.exports = {
    coursesRouter:coursesRouter
}