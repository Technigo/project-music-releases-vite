export const Playlists = ({ description, playlistUrl, images }) => {
    
    const PlaylistImageUrl = images[0].url
    return (
        <div className="playlistInner">  
            <img id="playlistImg" src={PlaylistImageUrl} alt="Playlist image" />
            <p><a href={playlistUrl}>{description}</a></p>
        </div>
    );
};

Playlists.defaultProps = {
    components: "No album name",
};

