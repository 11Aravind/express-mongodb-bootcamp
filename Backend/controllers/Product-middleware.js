import mongoose from "mongoose";
import Product from "./Models/Product";
export const getProductDetails=async(req,res,next)=>{
  return(
    let productDetails;
    try{
     productDetails=Product.find();
    }
    catch(error){
    return console.log(error);
    }
      if(!productDetails)
      {
        res.status(404).json({productDetails})
      }
  );
}
export const saveProduct=async(req,res,next)=>{
const {name,description,category,subCategory,image,oldPrice,newPrice,status}=req.body;
}

})
