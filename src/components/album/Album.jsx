import './Album.css'
import PropTypes from 'prop-types'

export const Album=(
    {name, date, key
    }
)=>{
    return (
    <div  className='album' id='album'>
        <img src="" alt="" />
        <p id={key}>
            <span className='albumName'>{name}</span>
        </p>
        <p id={key}>
            <span className='releaseDate'>Release Date:{date}</span>
        </p>
    </div>
  )
}

Album.PropType={
    name:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
}
