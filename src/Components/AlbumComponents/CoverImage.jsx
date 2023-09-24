const CoverImage = ({coverImage}) => {
   return ( //Rendering JSX and inserting icons
      <div className="coverimage-wrapper"><img src={coverImage} alt="Album cover" />
        <span className="icon-container">
            <button type="button" />
                <img src="public/Icons/heart.svg" alt="Heart Icon" className="white-icon"/>
            <button type="button" />
                <img src="public/Icons/play.svg" alt="Play Icon" className="white-icon"/>
            <button type="button" />
                <img src="public/Icons/dots.svg" alt="Dots Icon" className="white-icon"/>
        </span>
      </div>
    )
}
//Exporting the CoverImage component to be reused
export default CoverImage