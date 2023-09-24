//Child to App component and parent to following components: AlbumName, ArtistName, CoverImage, Header/

import data from "./data.json";
//import { App } from "./App";
//import { ArtistName } from "./ArtistName"
//import { CoverImage } from "./CoverImage"
import { name } from "./AlbumName"

console.log(data);

export const Album = () => {
    <AlbumName name={name} hrefName={hrefName} />
};