import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { Header } from './Header';
import "./Album.css";

export const Album = ({ album }) => {
    //console.log(album);
    return (
        <div className="albumComponent">
            <CoverImage imageUrl={album.images[0].url} />
            <AlbumName name={album.name} />
            <div>
                {album.artists.map((artist, index) => (
                    <ArtistName key={index} name={artist.name} />
                ))}
            </div>
           
        </div>
    );
};