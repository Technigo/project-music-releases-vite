import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
// console.log(data);
// console.log(data.albums.items[0].name)//album name
// console.log(data.albums.items[0].artists[0].name)
// console.log(data.albums.items[0].images[1].url)

export const App = () => {
  // const {name} = data;
  // console.log(name);
  const albumDatas = data.albums.items;

  // const albumName = albumData.albums.items.name //items is an array
  console.log(albumDatas);
  console.log(albumDatas[0].name);
  console.log(albumDatas[2].id);
  console.log(albumDatas[3].external_urls.spotify);

  return (
    <>
      <Header />
      <div>Find me in src/app.jsx!</div>
      <div className="album-card">
        {albumDatas.map((albumData) => (
          <Album key={albumData.id} albumData={albumData}>
            {albumData.artists.map((artist, index) => (
              <div key={index}>
                <a href={artist.external_urls.spotify}>{artist.name}</a>
              </div>
            ))}
          </Album>

          // Album key - This code renders an album component with data passed as prop.
          // Inside that component it maps through the list of artis associated with the album.
          // For each artist, creates a <div> with a link (<a>) to the artist's spotify page.

          //album key it map the items array, artist and images need to be map in Album component. key?
          // console.log(albumData.name) -> all the album name
          // console.log(albumData.images[1].url) -> all cover image src, no need to map because already know the index. we dont need all of the url
          // console.log(albumData.artists) -> need artist's name and link. use map(). can hold
          // **console.log(albumData.artists[0].name) -> artists is an arry, need map() to print the name and link**
          //console.log(albumData.artists[0].external_urls) -> artist's link
        ))}
      </div>
    </>
  );
};
