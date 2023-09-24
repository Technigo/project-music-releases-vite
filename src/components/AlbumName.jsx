import "./album-name.css"

export const AlbumName = ( { name, albumURL } ) => {
    //Returns an anchorelement which links to the album-page on spotify in a new tab when clicked. The text shown is the name of the album
    return (
    <a 
        href={albumURL}
        target="_blank"
        rel="noreferrer"
        className="albumA">
            {name}
    </a>
    )
}