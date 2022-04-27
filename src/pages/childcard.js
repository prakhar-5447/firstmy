import React from "react";

function childcard(props) {
  return (

    <div className="box">
      <div className="card box">
        <div className="card-body">
          <h4>{props.childs.name}</h4>
          <p>{props.childs.gender}</p>
          <p>{props.childs.age}</p>
        </div>
      </div>
    </div>

  );
}

export default childcard