import "./assct/Table.css";
import React from "react";
import { Link } from "react-router-dom"
const Table = ({ tableCardHeadding, tableHeadding, tableValues ,inlineStyle}) => {
    return (
        <div className="content-div" style={inlineStyle}> 
            <div className={tableCardHeadding ? "card-header" : "hiden"}>
                <div className="card-headding">{tableCardHeadding.tableHeadding}</div>
                <div className="top-button">
                    {
                        tableCardHeadding.buttonText && <Link to={tableCardHeadding.link}> <button className="btn-primary"> +{tableCardHeadding.buttonText}</button></Link>

                    }     
                     </div>
            </div>
            <table className="table-container table">
                <thead>
                    <tr className="table-headding">
                        {
                            tableHeadding.map((eachHeadding, id) =>
                                <td key={id}>{eachHeadding.th}</td>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableValues.map((eachValue, id) =>
                            <tr key={id} scope="row">
                                <td>{eachValue.id}</td>
                                <td>{eachValue.name}</td>
                                <td>{eachValue.age}</td>
                                <td>{eachValue.address}</td>
                                <td>  <i className="bi bi-trash3-fill"></i>  </td>
                                {/* <td><i className="bi bi-pencil-square"></i> </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Table;