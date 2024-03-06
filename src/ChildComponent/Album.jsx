/*import { CoverImage } from "./AlbumComponents/CoverImage";
import { AlbumName } from "./AlbumComponents/AlbumName";*/
import { ArtistName } from "./AlbumComponents/ArtistName";
import { AlbumName } from "./AlbumComponents/AlbumName"






export const Album = ({album}) => {
	return (
		<div className="album">
			<AlbumName />
			<ArtistName  artists={album.artists} />
		</div>

	)


}


