export const Artist = ({ artistInfo }) => {
	const isMultipleArtists = artistInfo.artists.length > 1

	// for multiple artists in an album or single
	let artistName
	if (isMultipleArtists) {
		artistName = artistInfo.artists
			.map((artist) => artist.name || "Unknown")
			.join(", ")
	} else {
		artistName = artistInfo.artists[0].name || "Unknown"
	}

	const artistInfoObj = {
		name: artistName,
		url: artistInfo.artists[0].external_urls.spotify,
		target: "_blank", //open url i new window
		rel: "noreferrer noopener", //required
		class: "artistTitle",
	}

	return (
		<div className={artistInfoObj.class}>
			<a
				href={artistInfoObj.url}
				target={artistInfoObj.target}
				rel={artistInfoObj.rel}>
				<h3>{artistInfoObj.name}</h3>
			</a>
		</div>
	)
}
