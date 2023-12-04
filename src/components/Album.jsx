
import { ArtistName } from './ArtistName.jsx'
import { CoverImage } from './CoverImage.jsx'
import { AlbumName } from './AlbumName.jsx'
import { ReactComponent as DotsIcon } from '../assets/icons/dots.svg';


export const Album = ({ albumProp }) => {
    console.log(albumProp);
    return (
        <div className="albumWrap">
            {albumProp.map((album) => (

                <div className="card" key={album.id}>
                    <CoverImage images={album.images} dotsIcon={DotsIcon} />
                    <a href={album.external_urls.spotify}>
                        <AlbumName nameProp={album.name} />
                    </a>
                    <a href={album.artists[0].external_urls.spotify}>
                        <ArtistName artistProp={album.artists} />
                    </a>
                </div>

            ))}
        </div>
    );
}
