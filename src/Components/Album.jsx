import PropTypes from 'prop-types'
import { AlbumName } from './AlbumName'
import { ArtistName } from './ArtistName'
import { CoverImage } from './CoverImage'
import './Album.css'

export const Album = ({ albumName, coverImg, artists }) => {
	return (
		<section className="album-wrapper">
			<div className="album-container">
				{/* Accessing album cover */}
				<div className="cover-img">
					<CoverImage coverImg={coverImg} />
				</div>
				{/* Accessing album name */}
				<AlbumName albumName={albumName} />
				{/* Accessing artist name */}
				<ArtistName artists={artists} />
			</div>
		</section>
	)
}

//Define proptypes
Album.propTypes = {
	albumName: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	artists: PropTypes.arrayOf(PropTypes.string).isRequired,
}
