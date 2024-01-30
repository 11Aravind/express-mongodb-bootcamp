import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
const Navbar = () => {
    const menus = [
        {
            menu: 'PETS',
            to: "/Pets"
        },
        {
            menu: 'FOOD',
            to: "/foods"
        },
        {
            menu: 'ACCESSORYS',
            to: "/accessorys"
        },
        {
            menu: 'CONTACT',
            to: "/accessorys"
        },


    ];
    return (
        <nav className="navbar">
            <div className="navbar-container crossBtn">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    {
                        menus.map((menu, id) => {
                            return (
                                <li><Link key={id} to={menu.to} className="menu">{menu.menu}</Link></li>
                            );
                        })
                    }
                </ul>
                <h1 className="logo"><Link to="/">
                    <img src="	https://greenlandorganicfarms.com/image/logo.png" alt="" />                </Link> </h1>
                <ul className="menu-items">
                    <li><Link to="/" className="menu">search</Link></li>
                    <li><Link to="/" className="menu"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
                    <li><Link to="/login"><button className="loginBtn menu">Login</button></Link></li>
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;  