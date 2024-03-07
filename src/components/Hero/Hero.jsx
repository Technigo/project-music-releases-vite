import "./Hero.css";
import { albums } from "../../data/albums.json";

export const Hero = () => {
  const { id, images, artists } = albums.items[10];

  return (
    <div className="hero-container" key={id}>
      <img src={images[0].url} alt="Hero Image" />
      <div className="hero-text">
        <h1>{artists[0].name}</h1>
        <p className="listeners">44 463 028 monthly listeners</p>
      </div>
    </div>
  );
};
