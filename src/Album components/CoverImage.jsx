import PropTypes from "prop-types";

export const CoverImage = (props) => {
    return (
        <div><img src= {props.image} /></div>
    )
}

CoverImage.propTypes = {
    image: PropTypes.string.isRequired,
  };