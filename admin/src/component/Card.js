import "./CSS/Card.css";
const Card=()=>{
    return(
        <div className="card-container">
            <div className="product-image">
                <img src="https://cdn.petsworld.network/v1/s/images/14A316444FFA5185975749805CE3CC97/256.webp" alt="" />
            </div>
            <div className="product-description">
                <div className="product-name">
                Heka Grain Free Turkey & Sweet Potatoes Dry Dog Food 150 gm
                </div>
                <div className="price">
                    <div className="newPrice">₹ 324.00</div>
                    <div className="oldPrice">₹ 360.00</div>

                </div>
                <small>150 gm
1.8 kg
10 kg</small>
<button className="btn-cart">Add to Cart</button>
            </div>
        </div>
    );
}
export default Card;