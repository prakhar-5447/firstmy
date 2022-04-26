import React, { useContext, useEffect } from "react";
import "../style/display.css";
import CHILDIMG from "./childimg";
import orgContext from "../context/Context"

function Display() {
  const context = useContext(orgContext);
  const { org, getOrg } = context;
  useEffect(() => {
    getOrg()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="heading">ORGANISATION</h1>
        <div className="d-flex flex-column justify-content-between">
          <div className="row my-3">
            {org.map((orgs) => {
              return <CHILDIMG key={orgs._id} orgs={orgs} />
            })}
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Display;
