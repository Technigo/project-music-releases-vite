
//Eport 
export const AlbumName = ({ name, albumURL }) => {
    return (
        <div className="album-title">
            <a href={albumURL} target="_blank" rel="noopener norefferer">
                {name}</a></div>
    )
}
