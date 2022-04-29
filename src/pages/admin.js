import React, { useContext, useEffect, useRef, useState } from 'react'
import orgContext from "../context/Context"
import CHILDITEM from './childItem';
import { useNavigate } from 'react-router-dom'
import ADDCHILD from "./addChild";

const admin = () => {
    const context = useContext(orgContext);
    const { child, getchilern, updatechild } = context;
    let history = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history("../login");
        }
        let token = localStorage.getItem("token")
        getchilern(token)
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [childs, setChilds] = useState({ id: "", ename: "", egender: "", eage: "" })

    const editchild = (currentchild) => {
        ref.current.click();
        setChilds({ id: currentchild._id, ename: currentchild.name, egender: currentchild.gender, eage: currentchild.age })
    }

    const handleClick = (e) => {
        let token = localStorage.getItem("token")
        updatechild(childs.id, childs.ename, childs.egender, childs.eage, token)
        refClose.current.click();
    }

    const onChange = (e) => {
        setChilds({ ...childs, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ADDCHILD />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Child</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="ename" name="ename" value={childs.ename} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="egender" className="form-label">Gender</label>
                                    <input type="text" className="form-control" id="egender" name="egender" value={childs.egender} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eage" className="form-label">Age</label>
                                    <input type="number" className="form-control" id="eage" name="eage" value={childs.eage} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={childs.ename.length === 0 || childs.egender.length === 0 || childs.eage.length == 0} onClick={handleClick} type="button" className="btn btn-primary">Update Child</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container row w-75 mt-4 d-flex align-items-center my-3">
                <h2>You childern</h2>
                <div className="container mx-1">
                    {child.length === 0 && 'Nothing to display'}
                </div>
                {child.map((child) => {
                    return <CHILDITEM key={child._id} editchild={editchild} child={child} />
                })}
            </div>
        </>
    )
}

export default admin