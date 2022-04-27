import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

function Home() {
  return (
    <>
      <div className="bg-img"></div>
      <div className="box-main">
        <div className="firstHalf">
          <h1 className="text-big" id="head">FirstMy</h1>
          <hr />
          <p className="text-small">
            <br />FirstMy transforms the lives of children in crisis through the
            healing power of God, family, and community.
          </p>
          <br />
          <button className="Explore btn-primary btn-dark btn-lg"><Link className="text-white p-3 t-none"to="./display">Explore</Link></button>
        </div>
      </div>
    </>
  );
}

export default Home;
