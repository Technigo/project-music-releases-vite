import PropTypes from 'prop-types';
import { AlbumName } from './children/AlbumName';
import { ArtistName } from './children/ArtistName';
import { CoverImage } from './children/CoverImage';


export const Album = ({ albumData }) => {

    return (
        <div className="album-cover">
            <CoverImage coverImageUrl={albumData.images[0].url} />
            <AlbumName albumName={albumData.name} externalUrl={albumData.external_urls.spotify} />
            <ArtistName artistName={albumData.artists[0].name} externalUrl={albumData.artists[0].external_urls.spotify} />
        </div>
    );
};

Album.propTypes = {
    albumData: PropTypes.string.isRequired,
  };