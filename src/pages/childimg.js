import React from "react";
import IMG from "../images/images.jpg";

function childimg(props) {
  return (

    <div className="box">
      <div className="card box">
        <div className="card-body">
          <img src={IMG} alt="" />
          <h4>{props.orgs.owner}</h4>
          <p>{props.orgs.contact}</p>
          <p>{props.orgs.orgName}</p>
        </div>
      </div>
    </div>

  );
}

export default childimg;