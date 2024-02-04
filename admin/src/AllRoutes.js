import Home from "./pages/Home"
import Product from "./pages/Product.js"
import AddProduct from "./pages/AddProduct.js"
import Order from "./pages/Order.js"
import Blogs from "./pages/Blogs"
import Addblog from "./pages/Addblog"
import {  Route, Routes } from 'react-router-dom';
const routerInfo = [
    {
        path:"/",
        component:<Home />
    },
    {
        path:"/productdetails",
        component:<Product />
    },
    {
        path:"/addproduct",
        component:<AddProduct />
    },
    {
        path:"/orderdetails",
        component:<Order />
    },
    {
        path:"/blogs",
        component:<Blogs />
    },
    {
        path:"/addblog",
        component:<Addblog />
    },
];
export const AllRoutes=()=>{
    return(
        <Routes>
            {
                routerInfo.map((eachRoute,id)=>{
                    return(
                        <Route 
                        key={id}
                        path={eachRoute.path}
                        element={eachRoute.component}
                        />
                    );
                })

            }
        </Routes>
    );
}
// export default AllRoutes;