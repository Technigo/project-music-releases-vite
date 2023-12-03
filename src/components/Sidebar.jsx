import { IconButtons } from './children/IconButtons';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  /* CoverImage.css */
.cover-image-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.cover-image {
  max-width: 100%;
  height: auto;
  display: block;
  filter: brightness(1);
  transition: filter 0.3s ease;
  /* Add transition for filter property */
}

.cover-image-wrapper:hover .cover-image {
  filter: brightness(0.4);
}

a {
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}
`;


export const Sidebar = ({ playlistData }) => {
  return (
    <SideBarContainer className="sidebar-container">
      {playlistData.map((playlist) => ( // Maps over the playlists array and adds the correct url and name for each condition.
        <div className="playlists" key={playlist.id}>
          <span className="cover-image-wrapper">
            <IconButtons />
            <a href={playlist.external_urls.spotify}><img className="cover-image" src={playlist.images[0].url} alt={playlist.name} /></a>
          </span>
          <a href={playlist.external_urls.spotify} className="playlist-name">{playlist.name}</a>
        </div>
      ))}
    </SideBarContainer>
  )
}
