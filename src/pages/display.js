import React, { useContext, useEffect } from "react";
import "../style/display.css";
import ORGLIST from "./orglist";
import orgContext from "../context/Context"

function Display() {
  const context = useContext(orgContext);
  const { org, setchildvalue, getOrg, setorgid } = context;
  useEffect(() => {
    setorgid("")
    setchildvalue()
    getOrg()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="heading">ORGANISATIONS</h1>
        <div className="d-flex flex-column">
          <div className="row d-flex my-3">
            {org.map((orgs) => {
              return <ORGLIST key={orgs._id} orgs={orgs} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
