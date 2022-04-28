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
        <Link className="text-white py-2 px-3 Explore" to="./display">Explore &#8594;</Link>
      </div>
    </>
  );
}

export default Home;
