import { Fragment } from "react";
import data from "./data.json";
import { Header } from "./Header.jsx";
import { Section } from "./Section.jsx";
import { Sidebar } from "./sidebar/Sidebar.jsx";

console.log("Albums", data);

export const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Section heading="Singles" filter="single" data={data}/>
        <Section heading="Albums" filter="album" data={data}/>
      </main>
    </Fragment>
  );
};
