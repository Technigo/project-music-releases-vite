import data from "../Data/stretch-goal.json"

export const SideBar = ()=>{
    return(
         <section className="sidebar-section">
            <div className="playlist-card">
            {
            data.playlists.items.map((item)=>(
               
                <a className="playlist-item" key={item.id} href={item.external_urls.spotify}>
                     <img className="playlist-img" src={item.images[0].url} alt={item.name} loading="lazy"/>
                     <p className="playlist-description">Playlist • {item.name}</p>
                </a> 
               
                ))
            }
            </div>
        </section >
      
    )
}