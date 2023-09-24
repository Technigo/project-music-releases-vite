import AlbumName from './AlbumComponents/AlbumName';
import ArtistNames from './AlbumComponents/ArtistName';
import CoverImage from './AlbumComponents/CoverImage';

const Album = ({albumsArray}) => { //Defining a functional React component using albumsArray as property.

  //Rendering JSX, laying out the UI - the visual representation of the collection of albums.
  return (
    <section className="album-container">
         {albumsArray.map((mappedOutItem) => ( //Itirating the array of albums. The 'key' prop is set to a uniqe identifier for React's viritual DOM to efficiently track and update component.
             <div className="album-card" key={mappedOutItem.id}>

                {/* Starting with the first cover image of the array  */}
                <CoverImage coverImage = {mappedOutItem.images[0].url} />

                {/* Get the value from it's parent using props and adds an external link */}
                <AlbumName albumName = {mappedOutItem.name} externalUrl={mappedOutItem.external_urls.spotify} />
                <ArtistNames artistsArray = {mappedOutItem.artists} externalUrl={mappedOutItem.external_urls.spotify} />
             </div>
        ))}
    </section>
  )
}
// Exporting the Album-component to be reused
export default Album