import "./styling/header.css"

export const Header = () => {
  return (
    <div className="header-wrapper">
      <h1 className="header">New Releases</h1>
      <div className="nav-wrapper">
        <button id="all" className="type-btn">All</button>
        <button id="album" className="type-btn">Album</button>
        <button id="single" className="type-btn">Single</button>
      </div>
    </div>
  )
}