import React from "react";
import "../style/about.css";

function About() {
  return (
    <>
      <div className="middle-box">
        <div className="overlay">
          <div className="point-1">
            <h1 className="topic1">Vision</h1>
            <p>
              A strong family for every child. To empower adult orphans with
              opportunities and support.
            </p>
          </div>

          <div className="point-2">
            <h1 className="topic2">Mission</h1>
            <p>
              FirstMy is dedicated to preventing child abuse by strengthening,
              equipping, and restoring children and families in crisis… “One Life at
              a Time.”
            </p>
          </div>
          <div className="point-3">
            <h1 className="topic3">Statement of Faith</h1>
            <p>
              FirstMy seeks to make available the teachings of Judeo-Christian
              principles while respecting the religious background of each
              individual. We acknowledge the Bible to be the inspired Word of God
              that teaches there is one Triune God and that salvation is a gift
              gained through forgiven
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
