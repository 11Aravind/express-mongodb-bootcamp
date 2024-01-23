import mongoose from "mongoose";
import Product from "./Models/Product";
export const getProductDetails=async(req,res,next)=>{
  return(
    try{
    const productDetails=Product.find();
    }
    catch(error){
    return console.log(error);
    }
  );
}
export const saveProduct=async(req,res,next)=>{
const {name,description,category,subCategory,image,oldPrice,newPrice,status}=req.body;
}

})
