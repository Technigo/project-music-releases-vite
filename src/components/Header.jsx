import { PropTypes } from 'prop-types';

export const Header = ({ text }) => {
  return (
    <div className="header-container">
      <h3 className="header-text">{text}</h3>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
