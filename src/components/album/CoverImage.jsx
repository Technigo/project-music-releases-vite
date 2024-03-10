import './CoverImage.css'
import PropTypes from 'prop-types'
import dots from '/src/assets/icons/dots.svg'
import heart from '/src/assets/icons/heart.svg'
import play from '/src/assets/icons/play.svg'

export const CoverImage=({images,name})=> {  
  const imgUrl = images[1].url  
  const imgAlt = name
  
  return (
    <div className='imgContainer'>
      <img src={imgUrl} alt={imgAlt} className='coverImg' />
      <div className='imgFunction'> 
        
        <img src={heart} className='heart'></img>
        <img src={play} className='play'></img>
        <img src={dots} className='dots'></img>
        
      </div>
    </div>
  )
}

CoverImage.PropType={
    name:PropTypes.string.isRequired
}