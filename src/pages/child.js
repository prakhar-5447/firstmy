import React, { useContext, useEffect } from "react";
import CHILDCARD from "./childcard";
import orgContext from "../context/Context"
import { useNavigate } from "react-router-dom";


function child() {
    let history = useNavigate()
    const context = useContext(orgContext);
    const { child, getChild, cid } = context;

    useEffect(() => {
        if (cid === "") {
            history("../display")
        } else {
            getChild(cid)
            // eslint-disable-next-line
        }
    }, [])

    return (
        <>
            <div className="container">
                <h1 className="heading">ORGANISATION</h1>
                <div className="row">
                    {child.map((childs) => {
                        return <CHILDCARD key={childs._id} childs={childs} />
                    })}
                </div>
            </div>
        </>
    );
}

export default child