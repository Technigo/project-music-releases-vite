const CoverImage = ({coverImage}) => {
    return (
         <div className="coverimage-wrapper">
            <img src={coverImage} alt="Album cover" />
                <span className="icon-container">
                    <button type="button" className="heart-icon"/>
                        <img src="public/Icons/heart.svg" alt="Heart Icon" 
                        className="white-icon"/>
                    <button type="button" className="play-icon"/>
                        <img src="public/Icons/play.svg" alt="Play Icon" 
                        className="white-icon"/>
                    <button type="button" className="dots-icon"/>
                        <img src="public/Icons/dots.svg" alt="Dots Icon" 
                        className="white-icon"/>
                </span>
        </div>
        )
}

export default CoverImage