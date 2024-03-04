export const ArtistName = ({ artists }) => {
  return (
    <div>
      Artist name{" "}
      {artists.map((artist) => {
        const artistName = artist.name;
        return artistName;
      }).join(", ")
      }
    </div>
  );
};
