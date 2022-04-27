import React from "react";
import "../style/home.css";
import IMG1 from "../images/bg3.jpg";
import IMG2 from "../images/child.jpg";
import IMG3 from "../images/logo.png";

function Home() {
  return (
    <>
    <div class="bg-img"></div>
    <nav class="navbar">
      <ul class="nav-list">
        <div class="logo">
          <img src={IMG3} />
        </div>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ADMIN PANEL</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">DONATE</a></li>
      </ul>
      <div class="rightNav">
        <button class="btn btn-sm">Login</button>
      </div>
      <div class="rightNav">
        <button class="btn btn-sm">Sign Up</button>
      </div>
    </nav>
    <div class="box-main">
      <div class="firstHalf">
        <h1 class="text-big" id="head">FirstMy</h1>
        <hr />
        <p class="text-small">
          <br />FirstMy transforms the lives of children in crisis through the
          healing power of God, family, and community.
        </p>
        <br />
        <button class="Explore btn-primary btn-dark btn-lg">Explore</button>
      </div>
    </div>
    <div class="middle-box">
        <div class={IMG1}></div>
      <div class="point-1">
        <h1 class="topic1">Vision</h1>
        <p>
          A strong family for every child. To empower adult orphans with
          opportunities and support.
        </p>
      </div>

      <div class="point-2">
        <h1 class="topic2">Mission</h1>
        <p>
          FirstMy is dedicated to preventing child abuse by strengthening,
          equipping, and restoring children and families in crisis… “One Life at
          a Time.”
        </p>
      </div>
      <div class="point-3">
        <h1 class="topic3">Statement of Faith</h1>
        <p>
          FirstMy seeks to make available the teachings of Judeo-Christian
          principles while respecting the religious background of each
          individual. We acknowledge the Bible to be the inspired Word of God
          that teaches there is one Triune God and that salvation is a gift
          gained through forgiven
        </p>
      </div>
    </div>
    </>
  );
}

export default Home;
