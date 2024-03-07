import data from "../data.json";

export const SortAlbums = () => {
  const { albums } = data;
  const filterAlbums = albums.items.filter(
    (element) => element.album_type != "single"
  );

  console.log("Filtered Albums:", filterAlbums);
  return filterAlbums;
};
// Filter out Albums
//// array.filter((element) => {
//  element.album_type !== "single"
//})
// Display albums

export const SortSingles = () => {
  const { albums } = data;
  const filterSingles = albums.items.filter(
    (element) => element.album_type === "single"
  );
  console.log("Filtered singles:", filterSingles);
  return filterSingles;
};
// Filter out Singles
// array.filter((element) => {
//  element.album_type === "single"
//})
// Display singles
