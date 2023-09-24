// Import the CSS file for this component to apply styles.
import "./Header.css"

// Define the Header component as a functional component and render a <div> element containing the header content.
export const Header = () => {
  return (
    <div>
      <h1 className="header">New Albums & Singles</h1>
      <p className="header">Technigo Web Development Programme</p>
    </div>
  )
}