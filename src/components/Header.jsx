import { useState } from "react";
import { Sidebar } from "./header-components/Sidebar";
import PropTypes from "prop-types";

export const Header = ({ sortOnClick }) => {
  const [isActive, setActive] = useState("false");
  // Makes a one-time toggle. To turn of animations when the user has noticed button.
  const ToggleClass = () => {
    if (isActive === "false") {
      setActive(!isActive);
    }
  };

  return (
    <div className="header">
      <Sidebar />
      <div className="title-and-button">
        <h1>Moon Music</h1>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              ToggleClass();
              sortOnClick();
            }}
          ></input>
          <span
            className={isActive ? "slider round animate" : "slider round"}
          ></span>
        </label>
      </div>
    </div>
  );
};

Header.propTypes = {
  sortOnClick: PropTypes.func.isRequired,
};
