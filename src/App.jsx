import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { Header } from "./Components/Header/Header";
import { Album } from "./Components/Album/Album";

export const App = () => {
  const [uniqueAlbums, setUniqueAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  console.log(data); // Log the data to the console
  useEffect(() => {
    // Simulate an asynchronous data fetch (replace with actual data fetching)
    setTimeout(() => {
      const filteredAlbums = data.albums.items.slice(0, 50); // Filter the first 50 albums
      setUniqueAlbums(filteredAlbums);
      setIsLoading(false); // Set loading state to false when data is available
    }, 1000); // Simulated delay for fetching data
  }, []);

  return (
    <div>
      <Header />

      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <p>Loading...</p> // Display a loading indicator
      ) : (
        <Album data={uniqueAlbums} />

      )}
    </div>
  );
};

// function filterUniqueAlbums (data) {
//   // Your filterUniqueAlbums function logic here
// }



// import data from "./data.json";

// import { Header } from "./Components/Header/Header";
// import { Album } from "./Components/Album/Album";

// console.log(data);

// export const App = () => {
//   return <div>
//     <Header />
//     <Album data={data} />
//   </div>;
// };

// import React, { useEffect, useState } from 'react';
// import data from "./data.json";

// import { Header } from "./Components/Header/Header";
// import { Album } from "./Components/Album/Album";

// export const App = () => {
//   // State to store the unique albums/songs
//   const [uniqueAlbums, setUniqueAlbums] = useState([]);

//   useEffect(() => {
//     console.log(data); // to see the data structure
//     // Filter and set unique albums/songs here
//     const uniqueAlbums = filterUniqueAlbums(data); // Implement this function
//     setUniqueAlbums(uniqueAlbums);
//   }, []);

//   return (
//     <div>
//       <Header />
//       {/* Pass the unique albums/songs data to the Album component */}
//       <Album data={uniqueAlbums} />
//     </div>
//   );
// };

// // Function to filter unique albums/songs
// function filterUniqueAlbums(data) {
//   const uniqueAlbums = new Set();

//   data.forEach((item) => {
//     uniqueAlbums.add(item.albumName);
//   });

//   return Array.from(uniqueAlbums);
// }

