import "./Album.css";
import "./AlbumList";

export const Album = (data) => {
  console.log(data);
  return (
    <section className="section__album">
      <AlbumList />
    </section>
  );
};
