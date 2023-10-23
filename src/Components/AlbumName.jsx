/* eslint-disable react/prop-types */


export const AlbumName = ({name , hrefName}) => {
  return (
    <div className="album-name">
        <a href={hrefName}>{name}</a>
    </div>
  )
}
