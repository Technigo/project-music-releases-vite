import "../../AlbumCards/album-card.css";
import { IconButtons } from "../../AlbumCards/Album/IconButtons/IconButtons";

export const Playlists = ({ playlists }) => {
  return (
    <>
        {playlists.map((playlist) => ( // Maps over the playlists array and adds the correct url and name for each condition.
            <div className="playlists" key={playlist.id}>
                <span className="cover-container">
                    <IconButtons />
                    <a href={playlist.external_urls.spotify}><img className="cover-image" src={playlist.images[0].url} alt={playlist.name} /></a>
                </span>
                <a href={playlist.external_urls.spotify} className="playlist-name">{playlist.name}</a>
            </div>
        ))}
    </>
  )
}
