<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

A page which shows new album and single releases and is built with React using data from Spotify. 

### The Problem

The main focus was to practice React and creating components, then transferring data from parent to children components using props (the individual album in this case). 
The app has three main components: Album cover (containing the image and a child component for icons), Album name with the link to its external URL, and Artist name(s), separated with "," and/or "&" if there are more than one, with the link to their external URLs.
Hover effects:
- When the user hovers over an album, it goes darker, and a play button, a favourite button, and the ellipsis are displayed
- When the user hovers over the play button, it grows bigger.
- Hovering over an artist name or an album name makes it underlined.
- When the user clicks on the album name, it should link to the album's external url in the data
- When the user clicks on an artist, it should link to the artist's external url in the data
The page is responsive: showing 4 albums per row on desktop, 2 per row on tablet, and 1 per row on mobile.

Potential improvements include:
- Lower the opacity of the play button icons and then when the user hovers over the play button, it should have full opacity
- Incorporate more information from the API response (e.g. release date) to make the site richer
- Sort the albums from the singles and create two different sections on the site
- Work with the API response which includes a list of popular playlists and create some new components to render a list of playlists in a sidebar

### View it live

hang-nguyen-project-music-releases.netlify.app
