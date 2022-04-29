import React, { useContext } from 'react'
import noteContext from "../context/Context"


const childItem = (props) => {
    const context = useContext(noteContext);
    const { deletechild } = context;
    const { child, editchild } = props;
    let token = localStorage.getItem("token");
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{child.name}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deletechild(child._id, token) }}></i>
                        <i className="far fa-edit mx-2" onClick={() => { editchild(child) }}></i>
                    </div>
                    <p className="card-text">{child.gender}</p>
                    <p className="card-text">{child.age}</p>
                </div>
            </div>
        </div>
    )
}

export default childItem