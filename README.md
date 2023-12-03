
# Music Releases

React app showcasing 50 album releases via spotify's API.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

This project began by diving into the fundamentals of React and progressively building the UI by creating components based on a provided design. Starting from the top-level component, the structure was defined, props were utilized to pass data to child components, and CSS was focused on to match the design requirements.

### Project Structure
#### CSS and Styling
The project's styling is divided into various CSS files to manage different components and layouts, catering to mobile, tablet, and desktop viewports.

#### Code Files
- App.js: Renders components for the header, album exploration, albums, singles, and playlists sidebar.
- Sidebar.js: Displays playlists using provided data and manages their appearance.
- Header.js: Displays a header with the project's name and creator.
- ExploreAlbum.js: Randomly showcases two albums from the provided album data.
- Album.js: Handles the rendering of individual albums with cover images and related details.
- IconButtons.js: Renders interactive icons for albums.
- CoverImage.js, ArtistName.js, AlbumName.js: Components managing cover images, artist names, and album names.

### View it live

https://stay-tuned-music-releases.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
