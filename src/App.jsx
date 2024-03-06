import { Header } from "./components/commons/Header";
import { Albums } from "./components/Albums";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Albums />
      </main>
    </>
  );
};
