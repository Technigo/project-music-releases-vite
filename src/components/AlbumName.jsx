// src/components/AlbumName.jsx

export const AlbumName = ({ album }) => {
    return (
        <h3>
            {/* Create a link to the album Spotify page */}
            <a href={album.external_urls.spotify} 
                target="_blank">

                {/* This displays the album name */}
                {album.name}
            </a>
        </h3>
    );
}