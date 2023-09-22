export const Header = () => {
    const imageObject = {
      imgUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",
      imgAlt: "An image of Spotify Logo"
    };
    const headerText = "";
  
    return (
      <header>
        <div className="header-container">
        <img src={imageObject.imgUrl} width={1000} height={300} alt={imageObject.imgAlt} />
        <p>{headerText}</p>
        </div>
      </header>
    );
  };
  