const mongoose = require ("mongoose");
mongoose.connect(process.env.MONGO_URL);

const Schema = mongoose.Schema;
const ObjetId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const adminSchema = new Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const courseSchema = new Schema({
    titel : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjetId
});

const purchaseSchema = new Schema({
    userId : ObjetId,
    creatorId : ObjetId
});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("courses",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}