import "../album-card.css";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistsListing } from "./Artists/ArtistsListing.jsx";
import { CoverImage } from "./CoverImage.jsx";

// Functional component that destructures image, name and artist to the component props image, album and artist.
// One of the most important components that displays the entire album information
export const AlbumCard = ({ fullAlbum }) => {
    const { images, name, artists, external_urls } = fullAlbum; // Destructuring fullAlbum to only get the parts I need from the long object

    return (
        <section className="card-content">
            <CoverImage albumUrl={external_urls} image={images[0]} />
            <div className="names">
                <AlbumName name={name} albumUrl={external_urls} /> 
                    <span className="artist-name">
                        <ArtistsListing artists={artists} />
                    </span>
            </div>
        </section>
    );
}
