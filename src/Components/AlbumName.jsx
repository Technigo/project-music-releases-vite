/* eslint-disable react/prop-types */


export const AlbumName = ({name}) => {
  return (
    <div className="album-name">
        <a href={name}>{name}</a>
    </div>
  )
}
