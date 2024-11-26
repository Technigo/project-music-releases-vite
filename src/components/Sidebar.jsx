import { playlists } from "../stretch-goal.json";
import { SidebarAlbum } from "./SidebarAlbum";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">Editor's Picks</h2>
      <div>
        {playlists.items.map((item) => (
          <SidebarAlbum
            key={item.id}
            sidebarImg={item.images.length > 0 ? item.images[0].url : "fallback-image-url.jpg"}
          />
        ))}
      </div>
    </div>
  )
}