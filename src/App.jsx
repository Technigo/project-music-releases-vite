import { Fragment } from "react";
import data from "./data.json";
import { Header } from "./Header.jsx";
import { Section } from "./Section.jsx";

console.log(data);

export const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
      <Section heading="Singles" filter="single" data={data}/>
        <Section heading="Albums" filter="album" data={data}/>
      </main>
    </Fragment>
  );
};
