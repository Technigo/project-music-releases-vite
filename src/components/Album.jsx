import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { Header } from './Header';


export const Album = ({ album }) => {
    console.log(album);
    return (
        <div className="albumComponent">
            <CoverImage imageUrl={album.images[0].url} />
            <AlbumName name={album.name} spotifyUrl={album.external_urls.spotify}/>
            <div>
                {album.artists.map((artist, index) => (
                    <ArtistName key={index} name={artist.name} spotifyUrl={artist.external_urls.spotify}/>
                ))}
            </div>
           
        </div>
    );
};