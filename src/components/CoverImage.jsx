import "./Album.css";

export const CoverImage = ({ cover }) => {
    return (
    <div class="album-cover">
        <img src={cover[1].url} alt="Album cover image" />
    </div>
    )
}