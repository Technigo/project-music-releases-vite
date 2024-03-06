import PropTypes from "prop-types"

export const Artists = ({ artists }) => {
  return (
    <div>
        <span>Artist:</span>
    {artists{0}.map((art, key) => (
    <ul key={key}>
      {" "}
      <li key={art}>{art}</li>
    </ul>
    ))}
    </div>
  )
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
}