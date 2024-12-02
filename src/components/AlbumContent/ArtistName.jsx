
export const ArtistName = ({ artistName, artistURL }) => {
    return (
        <div className ="artist-names">
            {/*Mapping over artistName to get hold of more than one artist (if there are multiple) */}
            {artistName.map((name, index) => (
                <a 
                    href={artistURL[index]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="artist-link" 
                    key={index}>
                        {/*Checking if the current artist is the last one in array. If not last artist, a comma is included. */}
                <h3 key={index}>{name}{index < artistName.length -1 && ", "}</h3> 
                
                </a>
            ))}
        </div>
    )    
}

