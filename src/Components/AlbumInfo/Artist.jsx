import "./Artist.css";

export const Artist = ({album}) => {
    const artistList = album.artists;
    return (
        /* Wrap the artist names in a div, then map through the artist list to return a div for each artist name if there are more than one, using the curly bracket to wrap around the mapping */
        <div className="artist-container">
            {artistList.map((artist) => {
                return (
                    <div key={artist.id} className="artist">
                        <a 
                        href={artist.external_urls.spotify}
                        target="_blank"
                        rel="noreferrer">
                            <h3>{artist.name}</h3>
                        </a>
                    </div> 
                )})
            }   
        </div>          
    )
}