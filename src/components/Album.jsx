import Heart from '../assets/icons/heart.svg?react';
import Play from '../assets/icons/play.svg?react';
import Dots from '../assets/icons/dots.svg?react';

const Album = ({
    name,
    externalUrl,
    coverImage,
    artists,
}) => {
    return (
        <div>
            <div className="album-wrapper">
                <img src={coverImage} alt="Album cover image" className="album-cover" />
                <span className="icon-wrapper">
                    <Heart className="icon heart-icon" />
                    <Play className="icon play-icon" />
                    <Dots className="icon dots-icon" />
                </span>
            </div>

            <a
                className="album-name"
                target="_blank"
                href={externalUrl}
                rel="noreferrer"
            >
                {name}
            </a>
            {artists.map((artist) => (
                <a
                    className="artist-name"
                    key={artist.id}
                    target="_blank"
                    href={artist.externalUrl}
                    rel="noreferrer"
                >
                    {artist.name}
                </a>
            ))}
        </div>
    );
};

export default Album;