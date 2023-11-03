import PropTypes from 'prop-types';
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
    const artists = albumData.artists.map(artist => artist.name).join(', ');
    return (
        <div className="cover">
            <CoverImage images={albumData.images[1].url} />
            <div className="content">
                <AlbumName albumName={albumData.name} externalUrl={albumData.external_urls.spotify} />
                <ArtistName artists={albumData.artists} externalUrl={albumData.artists[0].external_urls.spotify} />
            </div>
        </div>
    );
};

Album.propTypes = {
    albumData: PropTypes.object.isRequired,
};

