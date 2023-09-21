
//ArtistName is a functional componant that accepts a single prop called artistName
export const ArtistName = ({ artistName, artistURL }) => {
console.log(artistURL)
    return (
        <div className ="artist-names">
            {artistName.map((name, index) => (
                <a 
                    href={artistURL[index]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="artist-link" 
                    key={index}>
                        
                <h3 key={index}>{name}{index < artistName.length -1 && " & "}</h3> 
                
                </a>
            ))}
        </div>
    )    
}

//1. {/*iterating over the artistName-array. 'name': represents artist's name. 'index': index of current artist in array*/}
//2. {/*For each artist it creates a span element: */}
//3. {name}: inside the span element it displays artist's name
//4. {index < artistName.length - 1 && ", "}: This part is a conditional expression that checks if the current artist is not the last one in the array. If it's not the last artist, it appends a comma and space (", ") after the artist's name. This way, it separates multiple artist names with commas but doesn't add a trailing comma after the last artist.