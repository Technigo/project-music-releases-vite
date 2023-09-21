import data from "./data.json";
import React from 'react';
import { Header } from "./components/Header"
import { Album } from "./components/Album"


//----------- App component --------------//
export const App = () => {
  const albums = data.albums.items;
  console.log(albums);
  console.log("test");

  //----- Function to map over data array and pass album data to Album.jsx ------//
  const newAlbumsArray = () => {
    return albums.map(
      ({ id, name, album_type, images, artists, external_urls }) => (
        <Album
          key={id}
          name={name}
          albumType={album_type}
          image={images[0]}
          artists={artists}
          link={external_urls.spotify} />
      )
    );
  };
  //----- Render Header and  to map over data array ------//
  return (
    //we need React Fragment <> as we are returing more than one root element below
    <>
      <Header />
      <section className="Album-outer">
        {newAlbumsArray()}
      </section>
    </>
  )
};


//`Album` component which is rendered using `.map()` and which you pass the album data into using props. MAKE A NEW FILE Album.jsx
//`ArtistName` component which is rendered using `.map()` using each item in the `artists` array. The `Album` component to show the artist name and a link. MAKE A NEW FILE ArtistName.jsx

