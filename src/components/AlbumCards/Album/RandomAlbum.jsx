import { AlbumCard } from "./AlbumCard";

export const RandomAlbum = ({ allAlbums }) => {
    // Randomly select an album from all albumbs and set as the value of the variable called randomAlbum
    let randomAlbum = allAlbums[Math.floor(Math.random() * allAlbums.length)];

    return (
        <AlbumCard fullAlbum={randomAlbum}/> /* The RandomAlbum is passed over to AlbumCard */
    )
}

  