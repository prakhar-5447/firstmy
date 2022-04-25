import React from "react";
import "../style/display.css";

function Display() {
  return (
    <>
      <div className="container">
        <h1 className="heading">ORGANISATION</h1>
        <div className="d-flex flex-column justify-content-between">
          <div className="card box">
            <div className="card-body">
              <h4>org</h4>
              <p>This is some text within a card body.</p>
            </div>
          </div>
          <div className="card box">
            <div className="card-body">
              <h4>org</h4>
              <p>This is some text within a card body.</p>
            </div>
          </div>
          <div className="card box">
            <div className="card-body">
              <h4>org</h4>
              <p>This is some text within a card body.</p>
            </div>
          </div>
          <div className="card box">
            <div className="card-body">
              <h4>org</h4>
              <p>This is some text within a card body.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
