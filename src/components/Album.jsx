import { AlbumName } from "./AlbumInfo/AlbumName";
import { ArtistName } from "./AlbumInfo/ArtistName";
import { CoverImage } from "./AlbumInfo/CoverImage";
// import { CoverImage } from "./AlbumInfo/CoverImage";

// creating functional component, with prop items (data from JSON)
export const Album = ({ items }) => {

//extracting the albums array, put into albums variable
//using singleItem to map albums array, then sending that data to each component!
//also giving the div in the wrapper a key using the id.
    let albums = items.albums.items;
    console.log("this is the albums array", albums);
    return (
        <section className="album-wrapper">
            {albums.map((singleItem) => {
                //console.log("log singleItems:", singleItem);
                return (
                    <div className="album" key={singleItem.id}>
                        <CoverImage singleCoverItem={singleItem} />
                        <AlbumName singleAlbumItem={singleItem}/>
                        <ArtistName singleArtistItem={singleItem}/>
                    </div>
                );
            })}
        </section>
    );
};