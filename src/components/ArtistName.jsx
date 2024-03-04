export const ArtistName = ({name,external_url})=>{
    return <a className = "artist-name-link" href = {external_url}>{name}</a>
}
