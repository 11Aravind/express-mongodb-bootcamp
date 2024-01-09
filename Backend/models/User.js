//define a collection or table
import mongoose from "mongoose";

const userCollection=mongoose.Schema();
const userSchema=new userCollection({
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
        type:true,
        minlength:6
    }
});
export default mongoose.model("User",userSchema);