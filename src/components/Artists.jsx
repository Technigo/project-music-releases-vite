export const Artists = ({ artists }) => {
  console.log(artists);

  return (
    <p className="test">
      {artists.map((art, index) => {
        return (
          <span key={index}>
            <a
              href={art.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {(index ? ", " : "") + art.name}
            </a>
          </span>
        );
      })}
    </p>
  );
};

//   return (
//     <p className="test">

//     </p>
//     {artists.map((art, index) => {
//       return (
//         <div>
//           <a
//             href={art.external_urls.spotify}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {(index ? "& " : "") + art.name}
//           </a>
//         </div>
//       );
//     });
//   })
