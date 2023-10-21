import { PropTypes } from "prop-types";
export const ArtistName = ({ artists }) => {
  let artist = {};
  //   let name = [];
  //   let uri = [];

  artists.map((val) => {
    // name.push(val.name), uri.push(val.uri);
  });

  return (
    <div>
      <span key={key}>
        <span artist={artist}>
          <a href={artist.uri}>{artist.name}, </a>
        </span>
      </span>
    </div>
  );

  //   artists.map((val) => (name.push(val.name), uri.push(val.uri)));
  //   return (
  //     <div>
  //       {name.map((name, key) => (
  //         <span key={key}>
  //           <span name={name}>{name}, </span>
  //         </span>
  //       ))}
  //       {uri.map((uri, key) => (
  //         <span key={key}>
  //           <span uri={uri}>
  //             <a href={uri}> ARTIST LINK</a>
  //           </span>
  //         </span>
  //       ))}
  //       ;
  //     </div>
  //   );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
// <a href={uri}>ARTIST LINK</a>;
// <div>Artist Link: {uri}</div>

// <ul key={key}>
//   {" "}
//   <li key={uri}>{uri}</li>
// </ul>
