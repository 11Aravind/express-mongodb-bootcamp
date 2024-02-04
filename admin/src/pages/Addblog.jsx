import { useRef, useState } from "react";
import "./CSS/form.css"
import axios from "axios"
const Addblog = () => {
    const tittle=useRef("");
    const description=useRef("");
    const [image,setImage]=useState()
    const upload=()=>{
        const blogData={
            "tittle":tittle.current.value,
            "description":description.current.value,
            "image":image
        }
        axios.post("http://localhost:5000/api/blog/add",blogData)
        .then(res=>{})
        .catch((err)=>console.log(err))
    }
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Add Product</div>
                <div className="top-button">
                    <button className="btn-primary"> Go</button>
                </div>
            </div>
            <div className="table-container">
                <div className="row">
                    <div className="form-controler">
                        <label htmlFor="">Tittle</label>
                        <input ref={tittle} type="text" id="" className="inputBox" />
                    </div>
                    <div className="form-controler">
                        <label htmlFor="">Image</label>
                        <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} className="inputBox" />
                    </div>
                </div>
                <div className="form-controler">
                    <label htmlFor="description">Description</label>
                    <textarea ref={description} type="text" id="description" rows="20"  ></textarea>
                </div>
                <div className="form-controler">
                    <button className="add-blogBtn" onClick={upload}>SAVE</button>
                </div>
            </div>
        </div>
    );
}
export default Addblog;