import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

function Home() {
  return (
    <>
      <div className="bg-img"></div>
      <div className="box-main d-flex flex-column">
        <div className="firstHalf">
          <h1 className="text-big">FirstMy</h1>
          <p className="text-small">
            FirstMy transforms the lives of children in crisis through the
            healing power of God, family, and community.
          </p>
        </div>
        <button className="Explore btn-primary btn-dark btn-lg"><Link className="text-white p-3 t-none" to="./display">Explore &#8594;</Link></button>
      </div>
    </>
  );
}

export default Home;
