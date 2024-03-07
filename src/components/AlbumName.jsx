export const AlbumName = ({ albumInfo }) => {
	let albumInfoObj = {
		title: albumInfo.name,
		url: albumInfo.external_urls.spotify,
		target: "_blank", //open url i new window
		rel: "noreferrer noopener", //required
		class: "albumTitle"
	}

	// Take note of us using albumInfo for getting the data for Albumname - who we use to add all info for album in an album object, and then pass the properties to elements as div, a, h2 etc
	console.log("newAlbum ", albumInfoObj);
	console.log("newAlbum ", albumInfoObj.url);
	return (
		<div className={albumInfoObj.class}>
			<a
				href={albumInfoObj.url}
				target={albumInfoObj.target}
				rel={albumInfoObj.rel}
			>
				<h2>{albumInfoObj.title}</h2>
			</a>

		</div >
	)
}



