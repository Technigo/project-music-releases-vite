export const ArtistName = ({
  artists
}) => {
  return (
    <div className="artistName">
        <p> Artists: 
        {artists.map(({name}) => (
            <span> {name},</span>
            )) 
        }
        </p>
    </div>
  );
};



 

