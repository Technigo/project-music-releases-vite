import { PropTypes } from 'prop-types';

export const TracksInfo = ({ trackCount }) => {
  return <div className="tracks-info">{trackCount} tracks</div>;
};

TracksInfo.propTypes = {
  trackCount: PropTypes.number.isRequired,
};
