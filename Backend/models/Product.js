import mongoose from "mongoose";
const Schema=mongoose.Schema;
const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
    category:{
        type:String,
        required:true
    },
  subCategory:{
  type:String,
  required:true,
  },
    image:{
        type:String,
        required:true
    },
oldPrice:{
  type:Double,
  required:true
},
  newPrice:{
  type:Double,
  required:true
},
  status:{
  type:Boolean,
  }
  
})
export default  mongoose.model("Blog",blogSchema); //blog collection schema create akkunnu
