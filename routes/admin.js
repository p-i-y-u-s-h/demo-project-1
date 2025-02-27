const { Router } = require("express");
const { adminModel } = require("../db")
const adminRouter = Router();

adminRouter.post("/singup",(req,res)=>{

})

adminRouter.post("/singin",(req,res)=>{

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