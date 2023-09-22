import React from "react";
import AlbumName from "./AlbumName";
import CoverImage from "./CoverImage";
import ArtistName from "./ArtistName";

const Album = ({ image, link, title, artists }) => {
  return (
    <section className="album-section">
      <CoverImage image={image} />
      <AlbumName title={title} link={link} />
      <ArtistName artists={artists} />
    </section>
  );
};

export default Album;
