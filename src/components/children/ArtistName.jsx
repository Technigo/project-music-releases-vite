import React from 'react';

export const ArtistName = ({ name, external_urls, artists }) => {
  console.log(artists);
  const artistLength = artists.length;
  console.log(artistLength);
  return (
    <div className="artist-link">
      {artists.map(({ name, external_urls}, index) => (
         <React.Fragment key={index}>
            <a href={external_urls.spotify}>{name}</a>
            {index < artistLength - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </div>
  );
};
