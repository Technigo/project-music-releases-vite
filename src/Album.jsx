import React from "react";
import data from "./data.json";
import { ArtistName } from "./components/ArtistName";
import { AlbumName } from "./components/AlbumName";
import { CoverImage } from "./components/CoverImage";

export const Album = () => {
  return (
    <section className="album-section">
      {data.albums.items.map((album) => (
        <div key={album.id} className="album-item">
          <CoverImage album={album} />
          <div className="album-details">
            <ul className="album-info">
              <li>
                <AlbumName album={album} className="album-name" />
              </li>
              <li>
                <ArtistName artists={album.artists} className="artist-name" />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
