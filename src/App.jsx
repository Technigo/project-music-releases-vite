import data from "./data.json";
import { Header } from "./components/Header"
import { Album } from "./components/Album"
//import { AlbumName } from "./components/AlbumName"
//import { ArtistName } from "./components/AlbumName"
//import { CoverImage } from "./components/CoverImage"
//import { Header } from "./components/Header"

//----------- App component --------------//
export const App = () => {
  const albums = data.albums.items;
  console.log(albums);

  //Function to map over data array 
  const newAlbumsArray = () => {
    return albums.map(
      ({ id, name, album_type, images, artists }) => (
        <Album
          key={id}
          name={name}
          albumType={album_type}
          albumImages={images}
          artists={artists}
        />
      )
    );
  };

  return (
    <>
      <Header />
      <section className="Album-outer">
        {newAlbumsArray()}
      </section>
      <div>Find me in src/app.jsx!</div>;

    </>
  )
};


//`App` component which has the `data`
//`Album` component which is rendered using `.map()` and which you pass the album data into using props. MAKE A NEW FILE Album.jsx
//`ArtistName` component which is rendered using `.map()` using each item in the `artists` array. The `Album` component to show the artist name and a link. MAKE A NEW FILE ArtistName.jsx

