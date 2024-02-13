import mongoose, { Schema } from "mongoose"
const Schema=mongoose.Schema;
const categorySchema=new Schema({
mainCategory:{ //pet
    type:String,
    required:true
},
Category:{ //dog
    type:String,
    required:true
},
subCategory:{ 
    type:String,
    required:true
},
image:{
    type:String,
    required:true
}
});
export default mongoose.model("Category",categorySchema);