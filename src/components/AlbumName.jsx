//– Displays the album title and artist names.

// The AlbumName component renders the album's name as a clickable link to the album's Spotify page.
// It receives the album prop and extracts the relevant data to display the album's name.
export const AlbumName = ({ album }) => {
  return (
    <h3 className="album-name">
      <a
        href={album.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {album.name}
      </a>
    </h3>
  );
};
