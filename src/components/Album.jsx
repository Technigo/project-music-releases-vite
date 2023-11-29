
import { ArtistName } from './ArtistName.jsx'
import { CoverImage } from './CoverImage.jsx'
import { AlbumName } from './AlbumName.jsx'



export const Album = ({ albumProp }) => {
    console.log(albumProp);
    return (
        <div>
            {albumProp.items.map((album) => (

                <div key={album.id}>
                    <a href={album.external_urls.spotify}>
                        <ArtistName artistProp={album.artists} />
                    </a>
                    <CoverImage key={album.id} images={album.images} />
                    <AlbumName key={album.id} nameProp={album.name} />
                </div>

            ))}
        </div>
    );
}
