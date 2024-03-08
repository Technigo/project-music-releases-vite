import React from "react";
import { Icon } from "./Icons";
import Heart from "../assets/icons/heart.svg";
import Play from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

export const CoverImage = ({ album }) => {
  return (
    <section>
      <img src={album.images[0]?.url} alt={album.name} />
      <div className="icons">
        <div className="heart">
          <Icon icon={Heart} />
        </div>
        <div className="play">
          <a href={album.external_urls.spotify}>
          <Icon icon={Play} />
          </a>
        </div>
        <div className="dot">
          <Icon icon={Dots} />
        </div>
      </div>
    </section>
  );
};
