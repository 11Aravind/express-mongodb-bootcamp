import "./CSS/form.css"
const AddProduct = () => {
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Add Product</div>
                <div className="top-button">
                    <button className="btn-primary"> Go</button>
                </div>
            </div>
            <form className="table-container">
               <div className="form-controler">
               <label htmlFor="blogPic">Picture</label>
                <input type="file" id="blogPic" />
               </div>
               <div className="form-controler">
               <label htmlFor="">form element</label>
                <input type="text" id="" className="inputBox"/>
               </div>

<div className="row">
<div className="form-controler">
               <label htmlFor="">form element</label>
                <input type="text" id="" className="inputBox"/>
               </div>
               <div className="form-controler">
               <label htmlFor="">form element</label>
                <input type="text" id="" className="inputBox"/>
               </div>   
</div>

               <div className="form-controler">
                <label htmlFor="description">Description</label>
                <textarea type="text" id="description" width="300" height="300" ></textarea>
                </div>
                <button className="add-blogBtn">SAVE</button>
            </form>
        </div>
    );
}
export default AddProduct;