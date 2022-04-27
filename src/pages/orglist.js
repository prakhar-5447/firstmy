import React, { useContext } from "react";
import IMG from "../images/images.jpg";
import orgContext from "../context/Context"
import { useNavigate } from "react-router-dom";

function Orglist(props) {
  let history = useNavigate()
  const context = useContext(orgContext);
  const { setorgid } = context;
  const showchild = () => {
    setorgid(props.orgs._id)
    history("./child")
  }
  return (

    <div className="box">
      <div className="card box">
        <div className="card-body">
          <img src={IMG} alt="" />
          <h4>{props.orgs.owner}</h4>
          <h4>{props.orgs._id}</h4>
          <p>{props.orgs.contact}</p>
          <p>{props.orgs.orgName}</p>
          <button onClick={showchild} >MORE</button>
        </div>
      </div>
    </div>

  );
}

export default Orglist;