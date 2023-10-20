import { PropTypes } from "prop-types";
export const ArtistName = ({ artists }) => {
  let name = "";
  let uri = "";

  artists.map((val) => ((name = val.name), (uri = val.uri)));
  return (
    <div>
      Artistname: {name},<div></div>
      <div>
        <a href={uri}>ARTIST LINK</a>
      </div>
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
