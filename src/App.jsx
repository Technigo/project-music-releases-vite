import data from "./data.json";

console.log(data);

export const App = () => {
  return (
    <div>
      
      {data.albums.items.map((album) => (
        <div className="card">
          <p>{album.name}</p>
         
        </div>
      ))}
    </div>
  );
};
