import { AlbumName } from "./AlbumInfo/AlbumName";
import { ArtistName } from "./AlbumInfo/ArtistName";
import { CoverImage } from "./AlbumInfo/CoverImage";
// import { CoverImage } from "./AlbumInfo/CoverImage";

export const Album = ({ items }) => {
    console.log(items.albums.items)

    let albums = items.albums.items;
    console.log(albums);
    return (
        <section className="album-wrapper">
            {albums.map((singleItem) => {
                console.log("log singleItems:", singleItem);
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