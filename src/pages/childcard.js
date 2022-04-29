import React from "react";
import IMG from "../images/childimg.jpg"
import "../style/child.css"

function childcard(props) {
  return (
    <>
      <div className="box m-4">
        <div className="imgbox">
          <img src={IMG} alt="no_image" />
        </div>
        <div className="imgdetails">
          <div>
            <h1>{props.childs.name}</h1>
            <li>{props.childs.gender}</li>
            <li>{props.childs.age}</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default childcard