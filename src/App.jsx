import data from "./data.json";
import { Header } from "./ChildComponent/Header";
import { Album } from "./ChildComponent/Album";



//console.log(data);


export const App = () => {
	return (
		<div className="App">
			<Header />
			<div className="album-wrapper">
			{data.albums.items.map((album, index)=>{
				<Album key={index} album = {album}/>
				console.log("can you see me", index, album)
			})}
			</div>
		</div>
	);
};
