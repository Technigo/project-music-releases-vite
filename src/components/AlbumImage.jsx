
export const AlbumImage = ({ image, name, link }) => {
    return (
        <div className="albumCover">
            <img className="albumImage" src={image.url} alt={'Cover art for albumn: ${name}'} /></div>
    )
}
