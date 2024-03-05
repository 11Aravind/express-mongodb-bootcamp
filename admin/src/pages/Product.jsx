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
    const tableValues = [
        {
            id: 10,
            name: "Aravind",
            age: 19,
            address: "sreenandanam muthupilakkadu",
            action: "btn-warning",
        },
        {
            id: 11,
            name: "Siva",
            age: 19,
            address: "Siva bhavan",
            action: "btn-danger",
        },
        {
            id: 11,
            name: "Siva",
            age: 19,
            address: "Siva bhavan",
            action: "btn-danger",
        },
    
    ];
    const tableCardHeadding=
        {
            tableHeadding:"Product Details",
            buttonText:"Add",
            link:"/addproduct"
        };
    return(
      <div>
         <Table tableCardHeadding={tableCardHeadding} tableHeadding={tableHeadding} tableValues={tableValues} />
      </div>
    );
}
export default Product;