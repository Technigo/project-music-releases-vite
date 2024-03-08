// Here we create the cover image component.

export const CoverImage = (props) => {
  return (
    <div>
    {/* [0] This means first image. alt text for screen readers is set to an empty string otherwise it will repeat "album, album " */}
    <img src={props.album.images[0].url} alt="" />
    </div>
  );
}