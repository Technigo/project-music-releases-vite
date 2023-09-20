export const Header = () => {
    const imageObject = {
      imgUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",
      imgAlt: "An image of Spotify Logo"
    };
    const headerText = "Header, change later";
  
    return (
      <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <p>{headerText}</p>
      </header>
    );
  };
  