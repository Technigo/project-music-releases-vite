import { Header } from "./components/commons/Header";
import { Albums } from "./components/Albums";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Albums />
      </main>
      <footer></footer>
    </>
  );
};

// export const App = () => {
// const { album } = data.albums.items;
//   console.log(album)
// return (
//     <>
//       <Header />
//       <main>
//         <div>
//           {albums.map ((albumData) => (
//           <Albums key={album.id} album={album} />
//           )) }
//           </div>
//       </main>
//     </>
//     )}
