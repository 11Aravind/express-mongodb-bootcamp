import ImageSlider from "../component/ImageSlider";
import Categorylist from "../component/Categorylist";
import Card from "../component/Card";
const Home = () => {
    return (
        <div className="topSpacing">
            <div className="subNavBar">
                +91 8848310248 |    abcdef@gmail.com  | dfdsddsd
            </div>
            {/* <img src="./banner.webp" alt="banner" /> */}
<ImageSlider/>
<Categorylist />
<div className="product-cards">
<Card />
{/* <Card /> */}
{/* <Card />
<Card /> */}
</div>


            </div>
    );
}
export default Home;