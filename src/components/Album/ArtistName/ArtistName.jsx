import "./ArtistName.css";

export const ArtistName = ({ artistInfo }) => {
  // console.log(`Artist information`, artistInfo);

  // Check if there is more than 1 artist
  const multipleArtists = artistInfo.length > 1;

  // Maps the right artist with the right URL
  return (
    <div className="artist-name">
      {artistInfo.map((artist, index) => (
        <p className="p-card" key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank">
            {artist.name}
          </a>
          {/* Add a comma or ampersand if there are multiple artists */}
          {index < artistInfo.length - 2 && (multipleArtists ? ", " : "")}
          {index === artistInfo.length - 2 && (multipleArtists ? " & " : "")}
        </p>
      ))}
    </div>
  );
};

// Array to test the conditional logic for adding commas and ampersands. Only shows up on the albums that already has more than 1 artist.
//  const artistInfo3 = [
//   { id: 1, name: 'Artist 1', external_urls: { spotify: 'https://spotify.com/artist1' } },
//   { id: 2, name: 'Artist 2', external_urls: { spotify: 'https://spotify.com/artist2' } },
//   { id: 3, name: 'Artist 3', external_urls: { spotify: 'https://spotify.com/artist3' } },
//   { id: 4, name: 'Artist 4', external_urls: { spotify: 'https://spotify.com/artist4' } }
// ];
