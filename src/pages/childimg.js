import React from "react";
import "../style/childimg.css";
import IMG from "../images/images.jpg";

function childimg() {
  return (
    
    <div className="box">
        <div className="imgbox">
            <img src={IMG} alt="no_image"/>
        </div>
        <div className="imgdetails">
            <div>
                <h1>no name</h1>
                <li>age:none</li>
                <li>gender: none</li>
            </div>
        </div>
    </div>
    
  );
}

export default childimg;