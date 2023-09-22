export const AlbumName = ({ name, httplink }) => {
    return (
        < div className="album-name">
            <a
                href={httplink}
                target="_blank"
                rel="noopener noreferrer">{name}</a>
        </div >
    )
}
