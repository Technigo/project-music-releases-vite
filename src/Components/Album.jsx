import PropTypes from 'prop-types'
import { AlbumName } from './AlbumName'
import { ArtistName } from './ArtistName'
import { CoverImage } from './CoverImage'
import './Album.css'

export const Album = ({ albumName, coverImg, artists, albumUrl }) => {
	return (
		<section className="album-wrapper">
			<div className="album-container">
				{/* Accessing album cover */}
				<CoverImage coverImg={coverImg} />
				{/* Accessing album name */}
				<AlbumName albumUrl={albumUrl} albumName={albumName} />
				{/* Accessing artist name */}
				<ArtistName artists={artists} />
			</div>
		</section>
	)
}

//const artistNames = albumData.artists.map((artist) => artist.name).join(', ')

//<h3 key={index}>{name}{index < artistName.length -1 && ", "}</h3>

//Define proptypes
Album.propTypes = {
	albumName: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	artists: PropTypes.arrayOf(PropTypes.string).isRequired,
	albumUrl: PropTypes.string.isRequired,
}
