import "./artist-name.css"

export const ArtistName = ({ name, artistURL }) => {

    //Depending on the number of artists the text will be displayed differently.
    let numberOfArtists = name.length

    //A function which creates an anchorelement which links to the spotify-page of each artist in a new tab. The artist name is the text of the link
    const artistToURL = (artistName, URL) => {
        let nameOfArtist = artistName;
        let href=URL;

        return (<a href={href} target="_blank" rel="noreferrer">{nameOfArtist}</a>)
    }

    //Calls the artistToURL-function
    if (numberOfArtists == 1)
        {
            return (
                <>
                {artistToURL(name, artistURL[0])}
                </>
            )
        }
    //If there are two artists, the artistToURL-function is called twice, the names are seperated with the &-sign
    else if (numberOfArtists == 2)
        {
            let firstArtist = name[0]
            let secondArtist = name[1]
            let firstURL = artistURL[0]
            let secondURL = artistURL[1]
            return (
                <>
                    {artistToURL(firstArtist, firstURL)}<p> & </p>{artistToURL(secondArtist, secondURL)}
                </>
            )
        }
    //If there are more than two artists, the text is returned with a comma between each artist and a &-sign between the two last ones.
    else 
    {
        let allArtists = name

        allArtists.map(
            (item) => 
            artistToURL(
                item, 
                artistURL[name.indexOf(item)]
                )
            )

        /* Pops the last artistname (and URL) from the array. It is then joined together in the returnString with commas between and an &-sign before the last artist */
        let lastName = allArtists.pop()
        let returnString = <p>{allArtists.join(", ")} & {lastName}</p>

        return returnString
    }
}