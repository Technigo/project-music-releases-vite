import { ArtistName } from "./ArtistName";
// Export a constant named 'Album' which is a functional React component
export const Album = (mappedOutItem) => {
  // Destructure the 'albumsArray' property from the 'mappedOutItem' object
  const { albumsArray } = mappedOutItem;

  // Return JSX representing the Album component
  return (
    // Create a section element with the CSS class "album-container"
    <section className="album-container">
      {/* Use .map() to iterate over each item in 'albumsArray' */}
      {albumsArray.map((mappedOutItem) => (
        // For each album, create a div with the CSS class "album-card" and a unique key based on the album's 'id'
        <div className="album-card" key={mappedOutItem.id}>
          {/* Create a div with the CSS class "image-container" to hold the album image */}
          <div className="image-container">
            {/* Display the album image using the URL from the first image in the 'images' array */}
            <img src={mappedOutItem.images[0].url} className="album-image" alt="Cover" />
            <div className="albums">
            <a href={mappedOutItem.external_urls.spotify} target="_blank" className="album-name" rel="noreferrer"> {mappedOutItem.name}</a>
            </div>
          </div>
          <ArtistName albumsArray={[mappedOutItem]}/>
        </div>
      ))}
    </section>
  );
};

//  return (
//   <section className="album-container">
//   {albumsArray.map((album) => (
//     <div className="album-card" key={album.id}>
//       <div className="image-container">
//         <img src={album.images[0].url} className="album-image" alt="Cover" />
//       </div>
//       <div className="album-details">
//         <a href={album.external_urls.spotify} target="_blank" className="album-name" rel="noreferrer">
//           {album.name}
//         </a>
//         <ArtistName albumsArray={[album]} /> {/* Pass the specific album as an array */}
//       </div>
//     </div>
//   ))}
// </section>
// );
// };