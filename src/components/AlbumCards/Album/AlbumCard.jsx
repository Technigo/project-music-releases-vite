import "../album-card.css";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistsListing } from "./Artists/ArtistsListing.jsx";
import { CoverImage } from "./CoverImage.jsx";

// Functional component that destructures image, name and artist to the component props image, album and artist.
export const AlbumCard = ({ fullAlbum }) => {
    const { images, name, artists, external_urls } = fullAlbum;
    console.log(fullAlbum);

    return (
        <div className="card-content">
            <CoverImage image={images[0]} />
            <div className="names">
                <AlbumName name={name} albumUrl={external_urls} /> 
                    <span className="artist-name">
                        <ArtistsListing artists={artists} />
                    </span>
            </div>
        </div>
    );
}