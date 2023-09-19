import style from "./AlbumName.module.css"
export const AlbumName =({name ,url})=>{

    return (
        <p className={style.title}><a href={url}>{name}</a></p>
    )
}