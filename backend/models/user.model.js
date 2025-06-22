import mongoose from "mongoose";

const database_schema=mongoose.Schema({
    uid:
    {
        type:Number,
         required:[true,"Please provide the id"]
    },
    firstName:
    {
        type:String,
        required:[true,"Please provide the firstname"]
    },
    lastName:
    {
        type:String,
        required:[true,"Please provide the lastname"]
    },
    email:
    {
        type:String,
        required:[true,"Please provide the email"],
        unique:true
    },
    age:
    {
        type:Number,
        required:[true,"Please provide the age"],
    },
    city:
    {
        type:String,
        required:[true,"Please provide the city"],
    },
    picture:
    {
        type:String,
        required:[true,"Please provide the Image"],
    }
});

const Cheaters=mongoose.model("Cheaters",database_schema);

export default Cheaters;