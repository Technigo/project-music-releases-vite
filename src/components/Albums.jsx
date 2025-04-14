import data from "../data.json";
import { Album } from "./Album";

console.log(data);
// The Albums component is responsible for rendering a list of albums.
// It maps through the data and renders an individual Album component for each album.
export const Albums = () => {
  return (
    <main>
      {/* This ul contains all album cards */}
      <ul className="album-grid">
        {/* Map over each album in the data.json and pass each album as a prop to the Album component */}
        {data.albums.items.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </ul>
    </main>
  );
};

// styling will be done here
