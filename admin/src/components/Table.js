import "./assct/Table.css";
import React from "react";
import { Link } from "react-router-dom"
const Table = ({tableCardHeadding,tableHeadding,tableValues}) => {
    return (
        <div className="content-div">
            <div className="card-header">
                <div className="card-headding">{tableCardHeadding.tableHeadding}</div>
                <div className="top-button">
{
        tableCardHeadding.buttonText &&   <Link to={tableCardHeadding.link}> <button className="btn-primary"> +{tableCardHeadding.buttonText}</button></Link>

}                </div>
            </div>
            <table className="table-container">
                <tr className="table-headding">
                    {
                        tableHeadding.map((eachHeadding, id) =>
                            <td>{eachHeadding.th}</td>
                        )
                    }
                </tr>

                {
                    tableValues.map((eachValue, id) =>

                        <tr key={id}>
                            <td>{eachValue.id}</td>
                            <td>{eachValue.name}</td>
                            <td>{eachValue.age}</td>
                            <td>{eachValue.address}</td>
                            <td><i className="bi bi-pencil-square"></i> </td>
                            <td>  <i className="bi bi-trash3-fill"></i>  </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}
export default Table;