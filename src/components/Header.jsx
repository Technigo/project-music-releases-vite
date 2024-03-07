import { Sidebar } from "./header-components/Sidebar";
import PropTypes from "prop-types";

export const Header = ({ sortOnClick }) => {
  return (
    <div className="header">
      <Sidebar />
      <h1>Moon Music</h1>
      <label className="switch">
        <input type="checkbox" onChange={() => sortOnClick()}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

Header.propTypes = {
  sortOnClick: PropTypes.func.isRequired,
};
