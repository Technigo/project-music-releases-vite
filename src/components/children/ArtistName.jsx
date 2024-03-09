export const ArtistName = ({name, external_urls}) => {
  console.log(external_urls)
  return (
    <div className="a-links">
      <a href={external_urls}>
       { name } 
      
       </a></div>
        
    );
};


