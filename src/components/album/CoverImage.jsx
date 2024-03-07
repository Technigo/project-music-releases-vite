import './CoverImage.css'
import PropTypes from 'prop-types'


export const CoverImage=({images,name})=> {  
  const imgUrl = images[1].url  
  const imgAlt = name
  
  return (
    <div className='imgContainer'>
      <img src={imgUrl} alt={imgAlt} />
      <div className='imgFunction'> 
        <button className='heart'></button>
        <button className='play'></button>
        <button className='dots'></button>
      </div>
    </div>
  )
}

CoverImage.PropType={
    name:PropTypes.string.isRequired
}