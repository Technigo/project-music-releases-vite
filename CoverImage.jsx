/* Added css file to CoverImage.jsx - 05-03-24 */
/* Added the hover affect over album covers - 05-03-24 */
/* Smooth transition for the hover */
.album-cover {
  transition: filter 0.3s ease; /* Smooth transition for the filter property */
}

/* Reduce brightness to 50% on hover */
.album-cover:hover {
  filter: brightness(50%);
}

/* Positioning icons over album cover */
.cover-img {
  position: relative;
  display: inline-block;
}

.album-cover {
  display: block;
  width: 100%;
  height: auto;
}

/* Styling for icons */
.hoverIcon img {
  margin-right: 25px;
}

.dots-icon {
  width: 12px;
  height: 12px;
}

.favorite-icon {
  width: 23px;
  height: 23px;
}

.play-icon {
  width: 55px;
  height: 55px;
}

/* Keeping the hover to 50% brightness as you hover over the icons */
.cover-img:hover .album-cover {
  filter: brightness(50%);
}

/* Change fill color on hover */
.hoverIcon img:hover {
  filter: brightness(30%); /* Darken the icon on hover */
}