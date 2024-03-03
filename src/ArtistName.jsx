import PropTypes from 'prop-types'

export const ArtistName = (props) => {
  return (
    <div>
      <p>
        Artist: <a href={`/artist/${props.artist}`}>{props.artist}</a>
      </p>
    </div>
  )
}
