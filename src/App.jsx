import { Header } from "./components/Header.jsx"
import { Album } from "./components/Album.jsx"
import data from "./data.json"
import "./components/styling/app.css"

//pass json data to  *mArray* in Album
export const App = () => {
	return (
		<div className='app-wrap'>
			<Header albumList={data} />
			<Album musicArray={data} />
		</div>
	)
}
