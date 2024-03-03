import { Album } from "./Album";
import PropTypes from "prop-types";

export const Section = ({ heading, filter, data }) => {
  const filterType = filter;
  return (
    <section id={heading}>
      <h2>{heading}</h2>
      <div className="wrapper">
        {data.albums.items.map((album, i) => {
          if (album.album_type === filterType) {
            return (
              <Album
                key={i}
                src={album.images[1].url}
                albumTitle={album.name}
                albumUrl={album.external_urls.spotify}
                artists={album.artists}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  filter: PropTypes.string,
  data: PropTypes.object,
};
