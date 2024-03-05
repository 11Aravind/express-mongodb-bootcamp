import { useEffect, useState } from "react";
import {httpgetdata} from "../API/api"
const AddProduct=()=>{

    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{
        httpgetdata({},"api/category").then((data) => {
            // Check if the fetched data is an object and has 'categoryDetails' array
            if (data && Array.isArray(data.categoryDetails)) {
                setCategoryList(data.categoryDetails);
                console.log(categoryList);
            } else {
                console.error("Fetched data does not contain 'categoryDetails' array:", data);
            }
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    return(
        <div className="content-div">
        <div className="card-header">
            <div className="card-headding">Add Product
                {/* <p className="errorMessage">{message}</p> */}
            </div>
        </div>
        <div className="table-container">
            <div className="row " style={{ padding: "37px" }}>
                <div className="col">
                    <label htmlFor="category">Product Name</label>
                    <input type="text" id="category" className="form-control" />
                </div>
                <div className="col">
                    <label htmlFor="maincat">Category</label>
                    <select class="form-select" id="maincat" aria-label="Default select example">
                        <option selected>--Select--</option>
                                      {
                            categoryList.map((category,key)=>{
                               return  <option value={category._id}>{category.mainCategory},{category.category},{category.subCategory}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row" style={{ padding: "16px 37px" }}>
                <div className="col-4">
                    <label htmlFor="sub_cat">Old Price</label>
                    <input type="text" className="form-control" id="sub_cat" />
                </div>
                <div className="col-4">
                    <label htmlFor="sub_cat">Price</label>
                    <input type="text" className="form-control" id="sub_cat" />
                </div>
                <div className="col-4">
                    <label htmlFor="sub_cat">Image</label>
                    <input type="file" className="form-control" id="sub_cat" />
                </div>
            </div>
            <div className="row" style={{ padding: "16px 37px" }}>
            <div className=" mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
            </div>
           

            <div className="row" style={{ padding: "16px 37px" }}>
                <button className="btn btn-primary">Save</button>
            </div>
        </div>

    </div>
    );
}
export default AddProduct;