import { Link } from "react-router-dom";
const Navbar = () => {
    const menuData = [
        {
            menu: 'Dashboard',
            url: "/",
            subMenu: {
                menu: 'menu 1',
                url: "/"
            },
        },
        {
            menu: 'Service',
            subMenu: [
                {
                    menu: 'Product',
                    url: "/productdetails"
                },
                {
                    menu: 'Caretaker',
                    url: "/caretaking"
                },
                {
                    menu: 'Order',
                    url: "/orderdetails"
                },
                {
                    menu: 'Blog',
                    url: "/blogs"
                },
                {
                    menu: 'Gallery',
                    url: "/gallery"
                },
            ],
        },
    ];
    return (
        <>
            <Topnavbar />
            <div className="content-container">
                <div className="side-nav-container" >
                    {menuData.map((menuItem, index) => (
                        <div className="menu-container" key={index}>
                            <div className="main-menu-headding">{menuItem.menu}</div>
                            {Array.isArray(menuItem.subMenu) ? (
                                <>
                                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                        <Link to={subMenuItem.url}>
                                            <div className="submenu" key={subIndex}>{subMenuItem.menu}</div>

                                        </Link>))}
                                </>
                            ) : (
                                <Link to={menuItem.subMenu.url}>
                                    <div className="submenu" >{menuItem.subMenu.menu}</div>
                                </Link>
                                
                            )}
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
export default Navbar;
export const Topnavbar = () => {
    return (
        <div className="topnav-container">
            <img src="https://img.freepik.com/premium-vector/dog-paw-animal-paws_77417-1636.jpg?w=740" alt="logo" />
            <div className="closingBtn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="admin-name">
                Admin
            </div>
        </div>
    );
}