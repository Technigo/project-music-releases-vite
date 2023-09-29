import artist from '../../data/artist.json';

export const ArtistName = (artist) => {
    console.log(artist);
    const { artist } = artist;
    }    

    return (
        <div>
            <h1>{artist}</h1>
        </div>
    );

