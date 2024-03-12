import { useEffect, useState } from "react";
import {httpRequest} from "../API/api"
import Table from "../components/Table"
const Product=()=>{
    const tableHeadding = [
        {
            th: "#id"
        },
        {
            th: "Name"
        },
        {
            th: "Age"
        },
        {
            th: "Address"
        },
        {
            th: "Action"
        },
    ];
    const [productList,setProductList]=useState([]);
    // useEffect(()=>{
    //     httpRequest('get','api/product').then((data)=>setProductList(data));
    // },[])
    useEffect(() => {
        httpRequest('get',"api/product").then((data) => {
            // Check if the fetched data is an object and has 'categoryDetails' array
            if (data && Array.isArray(data.productDetails)) {
                setProductList(data.productDetails);
            } else {
                console.error("Fetched data does not contain 'productDetails' array:", data);
            }
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    // const tableValues = [
    //     {
    //         id: 10,
    //         name: "Aravind",
    //         age: 19,
    //         address: "sreenandanam muthupilakkadu",
    //         action: "btn-warning",
    //     },
    //     {
    //         id: 11,
    //         name: "Siva",
    //         age: 19,
    //         address: "Siva bhavan",
    //         action: "btn-danger",
    //     },
    //     {
    //         id: 11,
    //         name: "Siva",
    //         age: 19,
    //         address: "Siva bhavan",
    //         action: "btn-danger",
    //     },
    
    // ];
    const tableCardHeadding=
        {
            tableHeadding:"Product Details",
            buttonText:"Add",
            link:"/addproduct"
        };
    return(
      <div>
         <Table tableCardHeadding={tableCardHeadding} tableHeadding={tableHeadding} tableValues={productList} />
      </div>
    );
}
export default Product;