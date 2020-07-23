import React from "react";
import "./Home.css";
import Portrait from "../favicon_io/jeremy_final_dialogs_circle.png";

const HOME_PAGE = {
  bio_one: `I am a software engineer in Portland, Oregon. I sincerely care about the craft of system and user interface
  design. A well made piece of software offers future adaptability and
  modifiability. My hope is to produce tools for users which decrease
  unnecessary friction that can arise as humans interact more
  and more with digital technology.`,
};

const Home = (props) => {
  return (
    <div className={props.className + " home-body"}>
      <div className="portrait-container">
        <div>
          <img src={Portrait} className="portrait" alt="My Portrait" />
        </div>
      </div>
      <div className="bio-container">
        <h1 className="bio-header">Hi, I'm Jeremy</h1>
        <p className="bio-body">&emsp;{HOME_PAGE.bio_one}</p>
      </div>
    </div>
  );
};

export default Home;
