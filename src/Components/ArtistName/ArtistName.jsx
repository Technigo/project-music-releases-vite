import style from './ArtistName.module.css'


// export const ArtistName = ({ names }) => {
//   return (
//     <div className={style.artistName}>
//       {names.join(', ')}
//     </div>
//   );
// };

// // Add prop validation
// ArtistName.propTypes = {
//   names: PropTypes.array.isRequired, // Expect names to be an array
// };
export const ArtistName = () => {
  console.log('ArtistName')
  return (
    <div>ArtistName</div>
  )
}

