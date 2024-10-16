/* eslint-disable react/prop-types */

import "./ArtistName.css";

export const ArtistName = ({ artists }) => {
  return (
    <div className="artistName">
      {artists.map(({ id, name, external_urls }, index) => (
        <span key={id}>
          <a href={external_urls.spotify}>
            {name}
          </a>
          {index < artists.length - 1 && ", "} {/* Add comma if not last artist */}
        </span>
      ))}
    </div>
  );
};