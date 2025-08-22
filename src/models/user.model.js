import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    fullName: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
},{timestamps:true})

export default mongoose.model('User',userSchema)