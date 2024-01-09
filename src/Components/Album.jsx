import { ArtistName } from "./ArtistName";
import { Icons } from "./icons";
import "./Album.css"


export const Album = (mappedOutItem) => {
  const { albumsArray } = mappedOutItem;

  return (
    <section className="album-container">
      {albumsArray.map((mappedOutItem) => (
        <div className="album-card" key={mappedOutItem.id}>
          <div className="image-container">
          <Icons />
            <img src={mappedOutItem.images[0].url} className="album-image" alt="Cover" />
          </div>
          <div className="albums">
            <a href={mappedOutItem.external_urls.spotify} target="_blank" className="album-name" rel="noreferrer"> {mappedOutItem.name}</a>
            </div>
          <ArtistName albumsArray={[mappedOutItem]}/>
        </div>
      ))}
    </section>
  );
};