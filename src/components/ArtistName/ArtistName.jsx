import "./ArtistName.css";

// The prop object artistNameS is going to contain name/s of one or more artists.
export const ArtistName = ({ artistNameS }) => {
  // Using let because the value will change based on conditions.
  let artistNames = "";

  // Easier access to the artists property.
  const { artists } = artistNameS;

  // Length property checks how many elements there is in the artists array.
  if (artists.length === 1) {
    // If length has the value 1, there's only 1 element in the array and has an index of 0. The index will grow if there're more. Within these, the data for name can be found.
    artistNames = artists[0].name;
  } else if (artists.length === 2) {
    artistNames = `${artists[0].name} & ${artists[1].name}`;
    // More than 2 elements (artists).
  } else if (artists.length > 2) {
    // Using map() method for calling the names inside each element in the array to return the value for a new array with the artists names. I think...
    const namesArray = artists.map((artist) => artist.name);
    // pop() method removes and returns the last element  which represents the last artist in he list.
    const lastArtist = namesArray.pop();
    // join() method - joins the names with "," and adds an "&" before the last artist's name (which is stored in lastArtist).
    artistNames = namesArray.join(", ") + ` & ${lastArtist}`;
  }

  const theArtists = {
    name: artistNames,
    href: artistNameS.external_urls.spotify,
    target: "_blank",
  };

  return (
    <div className="artist-name">
      <a href={theArtists.href} target={theArtists.target}>
        <h3>{artistNames}</h3>
      </a>
    </div>
  );
};
