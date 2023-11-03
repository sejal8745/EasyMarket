import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true, //remove white space
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    role:{
        type:  Number,
        default: true,
    }
}, {timestamps:true});

export default mongoose.model('users',userSchema);