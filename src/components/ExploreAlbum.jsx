import { Album } from "./Album";

export const ExploreAlbum = ({ allAlbums }) => {
  //create a variable that randomly selects an album from the json
  let exploreAlbum = allAlbums[Math.floor(Math.random() * allAlbums.length)];

  return (
    <>
      <Album albumData={exploreAlbum} />
    </>
  )
}

