// import data from "./data.json";

// console.log(data);

// export const App = () => {
//   return <div>Find me in src/app.jsx!</div>;
// };

// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyComponent from './components/MyComponent'; // Import your MyComponent here
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MyComponent /> {/* Render your MyComponent here */}
//   </React.StrictMode>,
// );

// import React from 'react';
// import HelloWorld from "./components/HelloWorld";
// import MyComponent from "./components/MyComponent";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <HelloWorld />
//       <MyComponent />
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// import React from 'react';
// import data from './data.json';
// import Album from './components/Album'; // Import components from the correct path

// function App() {
//   return (
    
//     <div className="app">
//       <h1>New albums & singles</h1>
//       {data.albums.map((album, index) => (
//         <Album key={index} album={album} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import data from './data.json';
// import Album from './components/Album'; // Import components from the correct path

// function App() {
//   return (
//     <div className="app">
//       <h1>New albums & singles</h1>
//       {data.albums.map((album, index) => (
//         <Album key={index} album={album} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import data from './data.json';
// import Album from './components/Album';
// // import './App.css';

// function App() {
//   return (
//     <React.Fragment>
//     <div className="app">
//       <h1 className="header">New albums & singles</h1>
//       {/* {Array.isArray(data.albums) && data.albums.map((album, index) => (
//         <Album key={index} album={album} />
//       ))} */}
//       {Array.isArray(data.albums.items) && data.albums.items.map((album, index) => (
//         <Album key={index} album={album} />
//       ))}
      
//     </div>
//     </React.Fragment>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import data from './data.json';
import Album from './components/Album';

function App() {
  // Filter the albums to get only the first image for each album
  const filteredAlbums = data.albums.items.map((album) => ({
    ...album,
    images: [album.images[0]], // Get only the first image
  }));

  return (
    <React.Fragment>
      <h1 className="header">New albums & singles</h1>
      <div className="app">
        {/* <h1 className="header">New albums & singles</h1> */}
        {filteredAlbums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;









