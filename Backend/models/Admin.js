//define a collection or table
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const adminSchema=new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }
});
<<<<<<< HEAD
export default mongoose.model("Admin",adminSchema);
=======
export default mongoose.model("Admin",adminSchema);
>>>>>>> ab180b4 (some module was added)
