import Heart from '../assets/icons/heart.svg?react'
import Play from '../assets/icons/play.svg?react'
import Dots from '../assets/icons/dots.svg?react'

const icons = {
  Heart,
  Play,
  Dots
};

export const Icon = ({ icon }) => {
  const IconComponent = icons[icon];
  return IconComponent ? <IconComponent className="icon" /> : null;
};
