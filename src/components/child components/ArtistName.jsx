export const ArtistName = ({ artists }) => {
    
    const renderArtistNames = () => artists.map(
      ({name}) => name + ", "
    );
    
    const artistNames = renderArtistNames();
    
    return (
        <p className="artistName">
            {artistNames}
        </p>
    );
};

ArtistName.defaultProps = {
    artists: "No artist name",
};