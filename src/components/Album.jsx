
import { ArtistName } from './ArtistName.jsx'
import { CoverImage } from './CoverImage.jsx'
import { AlbumName } from './AlbumName.jsx'



export const Album = ({ albumProp }) => {
    console.log(albumProp);
    return (
        <div>
            {albumProp.map((album) => (

                <div key={album.id}>
                    <a href={album.external_urls.spotify}>
                        <ArtistName artistProp={album.artists} />
                    </a>
                    <CoverImage images={album.images} />
                    <AlbumName nameProp={album.name} />
                </div>

            ))}
        </div>
    );
}
