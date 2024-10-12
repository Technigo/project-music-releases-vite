<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

This task involved building a React app that displays music releases using data from a Spotify API response. The app features album covers, artist names, and various hover effects, such as showing icons (play, heart, dots) when hovering over an album cover.


### The Problem

I encountered several challenges during the project, including:

Positioning icons correctly: Initially, the icons were hidden behind the overlay. I resolved this by adjusting the z-index so that the icons appear above the overlay on hover.
Handling commas between artist names: I needed to dynamically add commas between artist names. I solved this by using conditional logic in the ArtistName component.
Styling issues: I encountered problems with unwanted spaces and default underlines on links. I fixed these by adjusting margins and using text-decoration: none for the default state and underline for the hover state.
These changes allowed the app to function as expected and match the project requirements.

### View it live

https://jonas-music-releases.netlify.app/

