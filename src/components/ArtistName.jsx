const ArtistName = ({ name }) => {
  return (
    <div className="artistName">
      <h3>{name}</h3>
    </div>
  );
};

export default ArtistName;

// tried with this code to make the artist open up in a new tab. dosen't work
// const ArtistName = ({ name }) => {
//   console.log(name);
//   const openArtistUrl = () => {
//     window.open(name[1]);
//   };
//   return (
//     <div
//       className="artistName"
//       onClick={openArtistUrl}
//       style={{ cursor: "pointer" }}
//     >
//       <h3>{name[0]}</h3>
//     </div>
//   );
// };

// export default ArtistName;
