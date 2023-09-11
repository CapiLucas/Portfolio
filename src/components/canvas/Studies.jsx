import React from "react";
import "./studies.css";
import CustomizedTimeline from "./Timeline";

function Studies() {
  return (
    <div>

      <div className="jorney">
        <p>MY JOURNEY</p>
        <h1 className="titles">My studies.</h1>
      </div>

      <div className="wrapper">
        <CustomizedTimeline/>
      </div>

    </div>
  );
}

export default Studies;
