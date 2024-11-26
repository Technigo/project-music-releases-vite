import PropTypes from "prop-types";

export const SidebarAlbum = ({ sidebarImg }) => {
  return (
    <>
      <section className="sidebar-album-container">
        <div className="cover-image-sidebar">
          <img className="cover-image-sidebar-img" alt="Single Cover" src={sidebarImg} />
        </div>
      </section>
    </>
  )
}

SidebarAlbum.propTypes = {
  sidebarImg: PropTypes.string.isRequired,
}