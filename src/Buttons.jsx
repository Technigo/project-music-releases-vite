import React from "react";

import "./Buttons.css";

import heart from "./assets/icons/heart.svg";
import play from "./assets/icons/play.svg";
import dots from "./assets/icons/dots.svg";

export const Buttons = () => {
  return (
    <span className="icon-wrapper">
      <button type="button" className="icon heart">
        <img src={heart} alt="heart" />
      </button>
      <button type="button" className="icon play">
        <img src={play} alt="play" />
      </button>
      <button type="button" className="icon dots">
        <img src={dots} alt="dots" />
      </button>
    </span>
  );
};
