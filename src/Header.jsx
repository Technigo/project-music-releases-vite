import { Fragment } from "react";
import { Nav } from "./Nav.jsx";

export const Header = () => {
  return (
    <Fragment>
      <h1>50 latest music releases</h1>
      <Nav />
    </Fragment>
  );
};
