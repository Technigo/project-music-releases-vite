import { albums } from "../data.json";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

// Album
export const Album = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="album-container">
          {albums.items.map((album) => (
            <div key={album.id} className="album-card">
              <CoverImage
                coverImg={album.images.length > 0 ? album.images[0].url : "fallback-image-url.jpg"}
                albumUrl={album.external_urls.spotify}
              />
              <div className="album-info">
                <AlbumName name={album.name} albumUrl={album.external_urls.spotify} />
                <ArtistName artists={album.artists} artistsUrl={album.external_urls.spotify} />
              </div>
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  )
}