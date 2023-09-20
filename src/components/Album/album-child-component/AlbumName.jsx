

export const AlbumName = ({ name, httplink }) => {
    return (
        < div >
            <a href={httplink} target="_blank" rel="noopener noreferrer">{name}</a>
        </div >
    )
}
