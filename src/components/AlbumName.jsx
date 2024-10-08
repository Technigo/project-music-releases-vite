import React from "react";

export const AlbumName = ({album}) => {
  return (
    <a href={album.external_urls.spotify}>
      <h2>{album.name}</h2>
    </a>
  );
};

