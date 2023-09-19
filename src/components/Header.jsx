import React from 'react';

const Header = ({ albumName }) => {
  return (
    <div className="header">
      <h2>{albumName}</h2>
    </div>
  );
};

export default Header;