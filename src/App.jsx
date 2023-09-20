import { Fragment } from "react";
import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <Fragment>
      <Header />
      {albumList()}
    </Fragment>);
};


const albumList = () => {
  const albumData = data.albums.items;

  return albumData.map(
    ({ id, name, artists, images }) => {
  <MusicCard 
  key = {id}
  albumCover = {images}
  albumName = {name}
  artist = {artists}
  />
}
);
};




// Header
const Header = () => {
  return (
    <div className="headerWrapper">
      <h1 className="headerText">New Albums & Singles</h1>
    </div>
  );
}


// Parent component
const MusicCard = () => {
  return (
    <div className="musicCard">
      < AlbumCover />
      <AlbumInfo />
    </div >
  );
};

// Child component
const AlbumInfo = () => {
  return (
    <div>
      <p className="albumName">Album name</p>
      <p className="artistName">artist name</p>
    </div>
  )
};

// Child component
const AlbumCover = () => {
  return (
    <div>
      Album cover image and alt text
    </div>
  );
};