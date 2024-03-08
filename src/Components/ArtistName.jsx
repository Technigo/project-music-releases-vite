import PropTypes from 'prop-types'
import './Album.css'

export const ArtistName = ({ artists }) => {
	console.log(artists)

	//Variable for more than 1 artists
	const multipleArtists = artists.length > 1

	//Map artist with the correct url
	return (
		<div className="artist-names">
			{artists.map((artist, index) => (
				<div className="separated-artists" key={artist.id}>
					<a href={artist.external_urls.spotify} target="_blank">
						<h3>{artist.name}</h3>
					</a>
					{index <= artist.length - 2 && (multipleArtists ? ', ' : '')}
					{index <= artist.length - 2 && (multipleArtists ? ', ' : '')}
				</div>
			))}
		</div>
	)
}

/*return (
    <div className="artist-names">
      {artists.map(({ id, name, external_urls }) => (
        <a key={id} href={external_urls.spotify} className="artist-link">
          <h3>{name}</h3>
        </a>
      ))}
    </div>
  )
}*/

ArtistName.propTypes = {
	artists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default ArtistName
