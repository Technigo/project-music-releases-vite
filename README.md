<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Spotify Music Releases --React Vite📚
A React application powered by Vite that allows users to interact with the data from Spotify. To build a page which shows new album and single releases.  

## Feature⛳️
- Display album cover image and album name
- Design: when hovering over album cover or artist name, the image go darker, one underline pop up. 
- Intermediate strech goals & advance goals: create JS logic and add one new component to render a list of playlists in a sidebar. 


### How I built it and what I have learned💻
- Technology Stack: I built this project using React and Vite for a fast development experience. It was truly enjoyable, and creating a small component to build a larger one feels like playing with Lego blocks.
- Styling:To achieve the hover effect and underlines on album covers and artist names, I used CSS and JavaScript to add interactivity to the UI. The challenging aspect was styling the darkened cover image while ensuring the play button remained clearly visible. To address this, I introduced an additional div element with an RGBA background.
- Deployment issue: When I deployed the project, the images didn't appear on the screen. I double-checked the image paths multiple times. Eventually, I noticed that the terminal mentioned the root should only be '/icons' instead of '/public/icons'. In the future, I will ensure that images, stylesheets, and JavaScript files use relative paths.

## View it live🖱
[Music-Spotify-React]https://sportify-music-react.netlify.app/


