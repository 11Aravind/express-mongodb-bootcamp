import { useRef, useState } from "react";
import { httpRequest } from "../API/api.js";
import "./CSS/form.css"
const Addblog = () => {
    const tittle = useRef("");
    const description = useRef("");
    const [file, setImage] = useState();

    const upload = () => {
        const blogData = new FormData();
        blogData.append("tittle", tittle.current.value);
        blogData.append("description", description.current.value);
        blogData.append("image", file);
        // axios.post("http://localhost:5000/api/blog/add",blogData)
        // .then(res=>{})
        // .catch((err)=>console.log(err))
        // console.log(blogData);
        httpRequest(
            blogData,
            "api/blog/add"
        ).then((data) => console.log(data));
    }
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Add Blog
                
                </div>

                {/* <div className="top-button">
                    <button className="btn-primary"> Go</button>
                </div> */}
            </div>

            {/* <div className="table-container">
                <div className="row">
                    <div className="form-controler">
                        <label htmlFor="">Tittle</label>
                        <input ref={tittle} type="text" id="" className="inputBox" />
                    </div>
                    <div className="form-controler">
                        <label htmlFor="">Image</label>
                        <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])} className="inputBox" />
                    </div>
                </div>
                <div className="form-controler">
                    <label htmlFor="description">Description</label>
                    <textarea ref={description} type="text" id="description" rows="20"  ></textarea>
                </div>
                <div className="form-controler">
                    <button className="add-blogBtn" onClick={upload}>SAVE</button>
                </div>
            </div> */}
            <div className="table-container">
                <div className="row " style={{ padding: "37px" }}>
                    <div className="col">
                        <label  htmlFor="Tittle" className="form-label">Tittle</label>
                        <input type="text" ref={tittle} className="form-control" id="Tittle" />
                    </div>
                    <div className="col">
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input className="form-control" onChange={(e) => setImage(e.target.files[0])} type="file" id="formFile" />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" ref={description} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
}
export default Addblog;