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
<<<<<<< HEAD
export default  mongoose.model("Product", productSchema); 
=======
export default  mongoose.model("Product", productSchema); 
>>>>>>> ab180b4 (some module was added)
