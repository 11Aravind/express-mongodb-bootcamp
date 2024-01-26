import "./assct/Table.css";
const Table = () => {
    return (
       <>
        <div className="card-header">
                <div className="card-headding">Product Details</div>
                <div className="top-button">
                    <button className="btn-primary"> + ADD</button>
                </div>
            </div>
            <table className="table-container">
                <tr className="table-headding">
                    <td>#Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Aravind</td>
                    <td>19</td>
                    <td>sreenandanam muthupilakkadu</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Aravind</td>
                    <td>19</td>
                    <td>sreenandanam muthupilakkadu</td>
                </tr>
            </table>
       </>
    );
}
export default Table;