export const ArtistName = ({artistName, artistURL}) => {
    return (
        
        <div className="artist-name">

            {artistName.map((name, index) => (
                // An anchor tag that wraps each artist's name, turning it into a clickable link.
                // href is dynamically set to the corresponding artist's URL from the artistURL array.
                // key is used by React to track elements in lists. It's set to the current index.
               
                <a 
                href={artistURL[index]}
                target="_blank"
                rel="noopener noreferrer" 
                className="artist-link"
                key={index}>
                <h3>{name}
                {/* Adding a comma after the artist's name if it's not the last name in the list. */}
                {index < artistName.length -1 && ","}
                </h3>
                </a>
            ))}
        </div>
    )
}
