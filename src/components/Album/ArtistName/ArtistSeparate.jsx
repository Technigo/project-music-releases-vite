// Import the CSS file for this component to apply styles.
import "./ArtistSeparate.css"

// Component for separating the artist names with commas (,) and ampersands (&). Checks if the current artist is the second to last in the list. If it is, it returns a <span> element with the class "ampersand-space" containing an ampersand.
export const ArtistSeparate = ({ index, length }) => {
  if (index === length - 2) {
    return <span className="ampersand-space"> &amp; </span>
    // Check if the current artist is not the last or second to last in the list. If it is not, return a <span> element with the class "comma-space" containing a comma.
  } else if (index < length - 2) {
    return <span className="comma-space">, </span>
  }
  // Default case returns an empty string.
  return ""
}