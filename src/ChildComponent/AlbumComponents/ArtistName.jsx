

export const ArtistName = ({ artists }) => {

	return (
		artists.map((artists, index) => {
			console.log("this is artists: ", artists, index);
			console.log("hello");

			<div>
				{artists.map((artist) => artist.name).join(', ')}
			</div>
			// <h2 className="artist-name">{artists.name[0]}</h2>

		}
		)
	)
}

console.log("tada")