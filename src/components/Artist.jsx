export const Artist = ({ artistInfo }) => {
	const isMultipleArtists = artistInfo.artists.length > 1

	let artistNames
	if (isMultipleArtists) {
		artistNames = artistInfo.artists.map((artist) => ({
			name: artist.name || "Unknown",
			url: artist.external_urls.spotify,
		}))
	} else {
		artistNames = [
			{
				name: artistInfo.artists[0].name || "Unknown",
				url: artistInfo.artists[0].external_urls.spotify,
			},
		]
	}

	return (
		<h3 className='artist-name-link'>
			{artistNames.map((artist, index) => (
				<>
					<a href={artist.url}>{artist.name}</a>
					{index < artistNames.length - 1 && (
						<span className='comma'>
							{index === artistNames.length - 2 ? ", " : " "}
						</span>
					)}
				</>
			))}
		</h3>
	)
}
