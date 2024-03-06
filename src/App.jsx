import { Album } from "./Album";
import data from "./data.json";

console.log(data);

// This is a React component, which is a function that returns JSX.
export const App = () => {
  return (
    <div>
      // Map is the same thing as for-loop, that you use to render through the array of data.
      {data.albums.items.map((album) => (
        <Album album={album} />
      ))}
    </div>
  );
};
