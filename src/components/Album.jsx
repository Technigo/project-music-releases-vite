import { AlbumName } from "./child components/AlbumName";
import { ArtistName } from "./child components/ArtistName";
import { CoverImage } from "./child components/CoverImage";
import { Header } from "./child components/Header";

export const Album = ({
    album,
    artist,
    cover,
    header,
}) => {
    return (
        <div>
            <AlbumName album={album} />
            <ArtistName artist={artist} />
            <CoverImage cover={cover} />
            <Header header={header} />
        </div>
    );
};

Album.defaultProps = {
    album: "Album is missing",
    artist: "Artist is missing",
    cover: "Cover image is missing",
    header: "Header is missing",
};