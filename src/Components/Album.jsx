import AlbumName from './AlbumName';
import ArtistNames from './ArtistName';
import CoverImage from './CoverImage';

const Album = ({albumsArray}) => {
    //console.log( albumsArray)
  return (
    <section className="album-container">
         {albumsArray.map((mappedOutItem) => (
             <div className="album-card" key={mappedOutItem.id}>
                <CoverImage coverImage = {mappedOutItem.images[0].url} />
                <AlbumName albumName = {mappedOutItem.name} externalUrl={mappedOutItem.external_urls.spotify} />
                <ArtistNames artistsArray = {mappedOutItem.artists} externalUrl={mappedOutItem.external_urls.spotify} />
             </div>
        ))}
    </section>
  )
};

export default Album