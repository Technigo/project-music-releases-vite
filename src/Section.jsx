import PropTypes from "prop-types"
import { Album } from "./ChildComponent/Album";

export const Section = ({filter, data}) => {
  const filterElement = filter  
  return (
    <section>
      <h2></h2>
      <div>
        {data.albums.items.map((album,i) => {
          if (album.album_type === filterElement) {
            return (
              <Album
                key={i}
                image={album.images[1].url}
                albumTitle={album.name}
                artist={album.artists} />
            )
          }
        })}
      </div>
    </section>
  )
}

Section.PropTypes = {
  filter: PropTypes.string
  data: PropTypes.object
}