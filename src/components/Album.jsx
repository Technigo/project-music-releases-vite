import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { Header } from './Header';

export const Album = ({ album: { images, name, external_urls, artists, id } }) => {
    return (
        <div className="albumComponent">
            <CoverImage imageUrl={images[0].url} />
            <AlbumName name={name} spotifyUrl={external_urls.spotify} />
            <div>
            {artists.map((artist, index) => (
                    <span key={`${artist.uri}-${artist.id}`} style={{ display: 'inline' }}>
                        <ArtistName 
                            name={artist.name} 
                            spotifyUrl={artist.external_urls.spotify} 
                        />
                        {/* Render comma if it's not the last artist */}
                        {index !== artists.length - 1 && ', '}
                    </span>
                ))}
            </div>
        </div>
    );
};
