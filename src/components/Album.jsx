import { Artists } from './Artists';
import { AlbumImage } from './AlbumImage';
//import { AlbumImages } from "./AlbumImages";
//import { Header } from "./components/Header";


export const Album = ({ name, albumType, image, artists, link }) => {

    return (
        //do I need a key attribute in the first div for this return?
        <div className="album-info">
            {<AlbumImage image={image} />}
            <p>
                <span><strong>{name}</strong></span>
            </p>
            <span>
                {artists.map((artist) => {
                    return (
                        <Artists key={artist.id}
                            name={artist.name}
                            artistURL={artist.external_urls.spotify} />
                    );
                })}
            </span>
            <p>
                <span>Album Type:</span> {albumType}
            </p>
        </div >
    )
}
Album.defaultProps = {
    name: "No name information available",
    albumType: "No albumn type available",
};
