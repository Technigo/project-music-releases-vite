import { Sidebar } from "./header-components/Sidebar";

export const Header = () => {
  return (
    <div className="header">
      <Sidebar />
      <h1>Moon Music </h1>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};
