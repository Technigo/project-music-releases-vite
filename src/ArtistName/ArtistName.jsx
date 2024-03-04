import "./ArtistName.css";

import { PluralArtists } from "./PluralArtists";

export const ArtistNames = ({ artistsArray }) => {
  return (
    <div className="artist-name-link">
      {artistsArray.map((mappedOutArtist, index) => (
        <h3 className="artist-names" key={mappedOutArtist.id}>
          <a
            href={mappedOutArtist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mappedOutArtist.name}
            <PluralArtists index={index} length={artistsArray.length} />
          </a>
        </h3>
      ))}
    </div>
  );
};
