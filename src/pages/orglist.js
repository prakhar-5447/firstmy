import React, { useContext } from "react";
import orgContext from "../context/Context"
import { useNavigate } from "react-router-dom";
import "../style/display.css"

function Orglist(props) {
  let history = useNavigate()
  const context = useContext(orgContext);
  const { setorgid } = context;
  const showchild = () => {
    setorgid(props.orgs._id)
    history("./child")
  }
  return (
    <>
      <div className="main">
        <ul className="d-flex justify-content-center">
          <li className="cards_item d-flex justify-content-center w-75">
            <div className="card d-flex flex-row">
              <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" width="400px" alt="" /></div>
              <div className="card_content d-flex flex-column  justify-content-between">
                <div>
                  <h2 className="card_title">{props.orgs.orgName}</h2>
                  <p className="card_text">owner : <b>{props.orgs.owner}</b></p>
                  <p className="card_text">address : <b>{props.orgs.address}</b></p>
                  <p className="card_text">contact : <b>{props.orgs.contact}</b></p>
                </div>
                <button className="btn card_btn" onClick={showchild}>More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Orglist;