export const AlbumsName = ({name, album_type}) => {
    const selectAlbum = name
    if (album_type === "album")
        
    return (
        <div className="albumName">
            {selectAlbum}
        </div>
    )
}