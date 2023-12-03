import PropTypes from 'prop-types';
import { AlbumName } from './children/AlbumName';
import { ArtistName } from './children/ArtistName';
import { CoverImage } from './children/CoverImage';
import styled from 'styled-components';

const AlbumCover = styled.div`
 
margin: 0px;
`;


export const Album = ({ albumData }) => {

    return (
        <AlbumCover>
            <CoverImage coverImageUrl={albumData.images[0].url} />
            <AlbumName albumName={albumData.name} externalUrl={albumData.external_urls.spotify} />
            <ArtistName artistName={albumData.artists} />
        </AlbumCover>
    );
};

Album.propTypes = {
    albumData: PropTypes.object.isRequired,
};