import PropTypes from "prop-types"

export const Icon = ({ icon }) => {
    return <img className="album-icon" color="white" src={icon} alt="" />;
  }

  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
  }
  
  export default Icon
  