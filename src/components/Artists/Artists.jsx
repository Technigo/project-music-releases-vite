export const Artists = (artists) => {
  const artistNames = artists.artists.map((artist) => artist.name).join(", ");

  return (
    <>
      <p>{artistNames}</p>
    </>
  );
  // return artists.artists.map((artist) => {
  //   return (
  //     <div className="artists" key={artist.id}>
  //       {artist.name}
  //     </div>
  //   );
  // });
};
