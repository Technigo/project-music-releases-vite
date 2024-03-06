import data from "./data.json";

console.log(data);

export const App = () => {
  const { albums } = data.albums;
  const renderAlbums = albums.items.map(({ name, id }) => (
    <Album name={name} key={id} />
  ));

  return (
    <div>
      <section className="albumNameList">console.log({renderAlbums})</section>
    </div>
  );
};
