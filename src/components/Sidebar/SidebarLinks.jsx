import { PropTypes } from 'prop-types';

export const SidebarLink = ({ description, onClick, type, disable }) => {
  return disable ? (
    <h2 className="link-disabled">{description}</h2>
  ) : (
    <a
      href="#"
      onClick={() => {
        onClick(type);
        return false;
      }}
    >
      <h2>{description}</h2>
    </a>
  );
};

SidebarLink.propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disable: PropTypes.bool,
};
