import { PropTypes } from "prop-types";

export const Header = ({ text }) => {
  return (
 		<div className="header-container">
 			<h4 className="header-text">
                { text }
            </h4>
 		</div>
 	);
 };

 Header.propTypes = {
	text: PropTypes.string.isRequired,
  };