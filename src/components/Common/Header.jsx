import "./Header.css";

export const Header = ({ title }) => {
  return (
    <header className="header">
      <p>{title}</p>
    </header>
  );
};
