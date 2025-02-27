const express = require("express");
const mongoose = require ("mongoose");
const { userRouter } = require("./routes/user");
const { coursesRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/courses",coursesRouter);
app.use("/api/v1/admin",adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://course:gwbSfGyPd7KBqvdT@cluster0.rmlmh.mongodb.net/mini-2");
    app.listen(3000);
    console.log("hiuegenjhhon")
}

main()