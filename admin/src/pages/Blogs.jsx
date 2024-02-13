import Table from "../components/Table"
const Blogs=()=>{
    const tableHeadding = [
        {
            th: "#id"
        },
        {
            th: "Tittle"
        },
        {
            th: "Image"
        },
        {
            th: "Content"
        },
        {
            th: "Action"
        },
        {
            th: ""
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
    ];
    const tableCardHeadding=
        {
            tableHeadding:"Blog Details",
            buttonText:" Add",
            link:"/addblog"
        };
    return(
      <div>
         <Table tableCardHeadding={tableCardHeadding} tableHeadding={tableHeadding} tableValues={tableValues} />
      </div>
    );
}
export default Blogs;