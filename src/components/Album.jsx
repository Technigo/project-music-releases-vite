import { Header } from './Header.jsx'
import { ArtistName } from './ArtistName.jsx'
import { CoverImage } from './CoverImage.jsx'
import { AlbumName } from './AlbumName.jsx'

export const Album = ({ dataProp }) => {
    const albumData = dataProp.albums.items
    return (

        <div className="album">
            <Header />
            {albumData.map((album) => {
                return (

                    <div className="album-wrapper" key={album.id}>

                        <ArtistName artistNameProp={album} />
                        <AlbumName albumNameProp={album} />
                        <CoverImage coverProp={album} />
                    </div>
                )
            })}
        </div>

    )
}
