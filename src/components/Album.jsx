import { Artist } from "./Artist"
import { AlbumName } from "./AlbumName"
import { Cover } from "./Cover";
import "./album.css"

//get the data *mArray* and "filter" it further down (albums)

export const Album = ({ mArray }) => {
  let albums = mArray.albums.items;
  console.log("this should be the array for albums: ", albums);


  return (

    // use map to make a new array newAlbum, also set the key for each - and pass it to AlbumName *in* albumInfo and *in* artistInfo for Artist
    <section className="album-wrap">
      {albums.map((newAlbum) => {
        return (
          <article className="album" key={newAlbum.id}>
            <Cover coverInfo={newAlbum} />
            <AlbumName albumInfo={newAlbum} />
            <Artist artistInfo={newAlbum} />
          </article>

        );
      })
      }

    </section>
  )
};