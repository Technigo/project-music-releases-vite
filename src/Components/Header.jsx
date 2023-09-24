export const Header = () => {
    const imageObject = {
      imgUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",
      imgAlt: "An image of Spotify Logo"
    };
    return (
      <header>          
      <div className="spotify-logo">
      <img src={imageObject.imgUrl}
        width={100}
        height={32}
      alt={imageObject.imgAlt}/>
      </div> 
        <div className="header-container">
          <h1 className="header-title">New Albums & Singles</h1>
          <h2 className="header-line">Technigo Lemon Isaac</h2>   
        </div>    
      </header>
    );
  };
  