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
      return  res.status(404).json({productDetails})
       return  res.status(200).json({message:"Product was empty"})
      
  );
}
export const saveProduct=async(req,res,next)=>{
const {name,description,category,subCategory,image,oldPrice,newPrice,status}=req.body;
  const productData={
    name,
    description,
    category,
    subCategory,
    image,
    oldPrice,
    newPrice,
    status
  }
  try{
    productData.save();
  }catch(error){
  return console.log(error);
  }
}

})
