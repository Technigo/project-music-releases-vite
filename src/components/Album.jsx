import { Artists } from './Artists';
import { AlbumImage } from './AlbumImage';
//import { AlbumImages } from "./AlbumImages";
//import { Header } from "./components/Header";


export const Album = ({ name, albumType, image, artists, link }) => {

    console.log('albumn', name, artists);

    return (
        //do I need a key attribute in the first div for this return?
        <div className="album-info">
            <div>
                {<AlbumImage image={image} />}
            </div>
            <p>
                <span>Name:</span> {name}
            </p>
            <p>
                <span>Album Type:</span> {albumType}
            </p>
            <p>
                <span>
                    {artists.map((artist) => {
                        return (
                            <Artists key={artist.id}
                                name={artist.name}
                                artistURL={artist.external_urls.spotify} />
                        );
                    })}
                </span>
            </p>
            {/* Separation of child components */}
        </div >
    )
}
Album.defaultProps = {
    name: "No name information available",
    albumType: "No albumn type available",
};
