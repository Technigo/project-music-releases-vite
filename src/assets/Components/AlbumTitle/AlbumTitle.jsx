export const AlbumTitle = ({ title, externalUrl }) => {
  return (
    <span className="albumName">
      <a href={externalUrl} rel="link-spotify">
        {title}
      </a>
    </span>
  )
}
