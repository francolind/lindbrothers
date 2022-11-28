import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }
},
{
    timestramps:true
}
)
const user = mongoose.model("user",userSchema)

export default user;