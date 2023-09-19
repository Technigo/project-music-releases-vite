import React from 'react';

const Header = ({ albumName, externalUrl }) => {
  return (
    <div className="header">
 <h2 className="album-title">
  <a
    href={externalUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="header-link"
  >
    {albumName}
  </a>
</h2>
    </div>
  );
};

export default Header;