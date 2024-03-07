import { Header } from "./components/commons/Header";
import { Albums } from "./components/Albums";
import { Footer } from "./components/commons/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Albums />
      </main>
      <Footer />
    </>
  );
};
