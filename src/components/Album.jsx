import PropTypes from 'prop-types';
import { AlbumName } from './children/AlbumName';
import { ArtistName } from './children/ArtistName';
import { CoverImage } from './children/CoverImage';
import styled from 'styled-components';

const AlbumCover = styled.div`
 
margin: 0px;

.names {
    margin: 16px 0;
}

`;


export const Album = ({ albumData }) => {

    return (
        <AlbumCover>
            <CoverImage coverImageUrl={albumData.images[0].url} />
            <div className="names">
                <AlbumName albumName={albumData.name} externalUrl={albumData.external_urls.spotify} />
                <ArtistName artistName={albumData.artists} />
            </div>
        </AlbumCover>
    );
};

Album.propTypes = {
    albumData: PropTypes.object.isRequired,
};