import { Album } from "./components/album/Album";
import Header from "./components/common/Header";
import data from "./data.json";

console.log(data);
const { items  } = data.albums

export const App = () => {
  const renderAlbum=items.map(
    ({id, name, release_date,artists,images,external_urls})=>(
    <><Album
        name={name}
        key={id}
        date={release_date}
        artists={artists}
        images={images}
        external_urls={external_urls}
         />
    </>
    )
  )  

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <section className="albumLibrary">
          {renderAlbum}
        </section>  
      </div>
    </div>

  )
};
