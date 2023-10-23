import AlbumName from "./AlbumName.jsx"
import ArtistName from "./ArtistName.jsx"
import Header from "./Header.jsx"
import CoverImage from "./CoverImage.jsx"

//The Album component receives an array of album data, maps over it to generate content for each album, including album covers, album names, artists, and links to Spotify pages. The content is structured within HTML elements and represents a list of albums to display.

// Album: Defines a functional component named Album that takes a single prop called data.
//Map: a JavaScript map function applied to the data prop. It iterates over an array and generates content for each album.
//key: For each album in the data array, it creates a <div> element with a unique key based on the index.
const Album = ({ data }) => {
    return (
        <div>
            <Header />
            <section className='albumWrapper'>
                {data.map((album, index) => (
                    <div key={index}>
                        <div>
                            <div>
                                <CoverImage url={album.images[1].url} alt={album.name} />
                            </div>
                            <div>
                                <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                    <AlbumName name={album.name} />
                                </a>
                            </div>
                            <h2>{album.album}</h2>
                            {album.artists.map((artist, artistIndex) => (
                                <span key={artistIndex}>
                                    <a
                                        href={artist.external_urls.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ArtistName
                                            name={artist.name}
                                            index={artistIndex}
                                            totalArtists={album.artists.length}
                                        />
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div >
    )
}

//Export component
export default Album
