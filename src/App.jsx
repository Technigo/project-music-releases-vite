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
import data from './data.json';
import Album from './components/Album';

function App() {
  return (
    <div className="app">
      <h1>New albums & singles</h1>
      {Array.isArray(data.albums) && data.albums.map((album, index) => (
        <Album key={index} album={album} />
      ))}
      {Array.isArray(data.albums.items) && data.albums.items.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
}

export default App;



