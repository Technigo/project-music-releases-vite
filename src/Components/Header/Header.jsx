import style from "./Header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.primaryHeading}>New Albums & Singles</h1>
    </header>
  );
};
