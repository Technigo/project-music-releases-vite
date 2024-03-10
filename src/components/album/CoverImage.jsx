import './CoverImage.css'
import PropTypes from 'prop-types'

export const CoverImage=({images,name})=> {  
  const imgUrl = images[1].url  
  const imgAlt = name
  
  return (
    <div className='imgContainer'>
      <img src={imgUrl} alt={imgAlt} className='coverImg' />
      <div className='imgFunction'> 
        
        <img src="src/assets/icons/heart.svg" className='heart'></img>
        <img src="src/assets/icons/play.svg" className='play'></img>
        <img src="src/assets/icons/dots.svg" className='dots'></img>
        
      </div>
    </div>
  )
}

CoverImage.PropType={
    name:PropTypes.string.isRequired
}