// Here is where we import the components from the other files. Quite similar to get.element.by.id ish ...
import { Header } from "./Header";
import { Album } from "./Album";
import data from "./data.json";

console.log(data);

// This is a React component, which is a function that returns JSX.
export const App = () => {
  return (
    <div>
      {/* Here we create the element for the header */}
      <Header />
      {/* Map is the same thing as for-loop, that you use to render through the array of data. */}
      <div className="albums">
        {data.albums.items.map((album) => (
          // Console.log showed a warning about the loop missing a key. Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

          // File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.
          <Album album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
};
