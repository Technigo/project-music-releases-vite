import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { Header } from './Header';

export const Album = ({ album }) => {
    //console.log(album);
    return (
        <div>
            <Header />
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