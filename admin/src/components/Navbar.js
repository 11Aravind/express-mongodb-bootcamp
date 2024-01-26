import Table from "./Table";
const Navbar=()=>{
    return(
<>
<Topnavbar/>
<div className="content-container">
<div className="side-nav-container">
 <div className="menu-container">
 <div className="main-menu-headding">Dashboard</div>
 <div className="submenu">menu1</div>
 </div>
 <div className="menu-container">
 <div className="main-menu-headding">Service</div>
 <div className="submenu">Add product</div>
 <div className="submenu">Add category</div>
 </div>
</div>
<div className="content-div">
          <Table/>
        </div>
</div>
</>
    );
}
export default Navbar;
export const Topnavbar=()=>{
    return(
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