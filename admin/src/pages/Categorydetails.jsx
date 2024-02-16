import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {httpRequest} from "../API/api"
export const Categorydetails = () => {
    const inlineStyle = {
        left: "0%",
        width: "100%",
        top: "103%",
    }
    const tableHeadding = [
        {
            th: "#id"
        },
        {
            th: "Image"
        },
        {
            th: "Action"
        },
    ];
    const tableValues = [
        {
            id: 10,
            url: "https://www.petsy.online/cdn/shop/files/Dog-Food-Banner_1351x375.jpg?v=1707374678",

        },
        {
            id: 11,
            url: "https://www.petsy.online/cdn/shop/files/Dog-_-CatTreats-Banner_1351x375.jpg?v=1707375010",

        },
    ];
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Category
                    {/* <p className="errorMessage">{alertMessage}</p> */}
                </div>
                <div className="top-button">

                    <Link to="/addcategory"> <button className="btn-primary"> +Add</button></Link>

                </div>
            </div>
            <div className="content-div" style={inlineStyle}>
                <table className="table-container table">
                    <thead>
                        <tr className="table-headding">
                            {
                                tableHeadding.map((eachHeadding, id) =>
                                    <td key={id}>{eachHeadding.th}</td>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableValues.map((eachValue, id) =>
                                <tr key={id} scope="row">
                                    <td>{eachValue.id}</td>
                                    <td><img src={eachValue.url} alt="banner" className="bannerImg" /></td>
                                    <td>  <i className="bi bi-trash3-fill"></i>  </td>
                                    {/* <td><i className="bi bi-pencil-square"></i> </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
// export default Categorydetails;
export const AddCategory = () => {
    const maincategory=useRef('');
    const category=useRef('');
    const subcategory=useRef('');
    const [image,setImage]=useState();
    const saveCategory=(e)=>{
        // console.log(maincategory.current.value);
        const categoryData=new FormData();
        categoryData.append("mainCategory",maincategory.current.value);
        categoryData.append("category",category.current.value);
        categoryData.append("subCategory",subcategory.current.value);
        categoryData.append("image",image);
        // console.log(categoryData);
        httpRequest(categoryData,'api/category/add');
    }
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Add Category
                    {/* <p className="errorMessage">{alertMessage}</p> */}
                </div>
            </div>
            <div className="table-container">
                <div className="row " style={{ padding: "37px" }}>
                    <div className="col">
                        <label htmlFor="maincat">Main Category</label>
                        <select class="form-select" id="maincat" ref={maincategory} aria-label="Default select example">
                            <option selected>--Select--</option>
                            <option value="Pet">Pet</option>
                            <option value="Food">Food</option>
                            <option value="Accessorys">Accessorys</option>
                            <option value="Medicine">Medicine</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="category">Category</label>
                        <input type="text"id="category" ref={category} className="form-control"  />
                    </div>
                </div>
                    <div className="row" style={{padding: "16px 37px" }}>
                        <div className="col">
                            <label htmlFor="sub_cat">Sub category</label>
                            <input type="text" ref={subcategory} className="form-control" id="sub_cat" />
                        </div>
                        <div className="col">
                            <label htmlFor="image">Image</label>
                            <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control" id="image" />
                        </div>
                    </div>
                    
            <div className="row"  style={{padding: "16px 37px" }}>
                <button className="btn btn-primary" onClick={saveCategory}>Save</button>
            </div>
            </div>

        </div>
    )
}