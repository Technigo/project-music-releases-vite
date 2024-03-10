import React, { useState } from 'react';
import { Artist } from "./Artist"
import { AlbumName } from "./AlbumName"
import { Cover } from "./Cover";
import "./styling/album.css"


//get the data *mArray* and "filter" it further down (albums)

export const Album = ({ mArray }) => {
	let all = mArray.albums.items;
	//set default state
	const [selected, setSelected] = useState(all);

	//Handle the different states - use filter to get new results
	const handlePreview = (state) => {
		if (state === "single") {
			const single = all.filter(artist => artist.album_type === "single");
			setSelected(single);
			return single;
		} else if (state === "album") {
			const album = all.filter(artist => artist.album_type === "album");
			setSelected(album);
			return album;
		} else if (state === "all") {
			setSelected(all);
			return all;
		}

	}
	return (
		//get user input from button - pass til handlePreview function with correct parameter
		<div className="nav-wrapper">
			<button id="single" className="type-btn" onClick={() => handlePreview("single")}>Singles</button>
			<button id="album" className="type-btn" onClick={() => handlePreview("album")}>Albums</button>
			<button id="all" className="type-btn" onClick={() => handlePreview("all")}>All</button>

			<section className="album-wrap">
				{selected.map((newAlbum, index) => {
					return (
						<article className="album" key={index}>
							<Cover coverInfo={newAlbum} />
							<AlbumName albumInfo={newAlbum} />
							<Artist artistInfo={newAlbum} />
						</article>


					);
				})
				}

			</section>
		</div>
	)
};