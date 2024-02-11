const Gallery = () => {
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">Gallery</div>
            </div>
            <div className="table-container">
                <div className="row " style={{ padding: "37px" }}>
                    <div className="col">
                        <input type="file"  className="form-control" id="Tittle" />
                    </div>
                    <div className="col">

                    <button className="btn btn-primary form-control">Upload</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Gallery;