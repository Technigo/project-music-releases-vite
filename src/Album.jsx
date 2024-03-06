import { AlbumName } from "./AlbumName.jsx";
// import { ArtistName } from "./ArtistName.jsx";
//import //coverimage
// this component takes in the data from app.jsx and we use props which include all of the arguments passed when calling the Album component in App.jsx. We can alsi use the varibale names instead if we want to.
export const Album = (props) => {
  return (
    <div>
      <AlbumName albumName={props.albumName} />
    </div>
  );
};

//de inkommande argumentens är lagda i props som är ett object som innehåller albymnames artists and coverimage så för att komma åt respektive behvlöer vu använda dot notiation som vanligt för att komma åt en key i ett objekt.

/* <ArtistName artists={props.artists} /> */
