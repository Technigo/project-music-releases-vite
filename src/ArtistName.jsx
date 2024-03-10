//Component (function in react). Working with bigger amounts of code, you need to work in diffrent files (components).
export const ArtistName = (props) => {
  return (
    // Span is like a div, but it is inline, not a block
    <span className="artist">
      <a href={props.artist.external_urls.spotify}>{props.artist.name}</a>
    </span>
  );
};
