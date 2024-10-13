<h1 align="center">
  <a href="">
    <img src="./src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

This project uses React to display music release information in album cards. Users can interact with the artist, title, and album image components. 

## Getting Started with the Project

### The Problem
 
This project presented several challenges. The first was organizing the data efficiently. I began by outlining all the necessary components and decided to create a separate CSS file specifically for the AlbumImage component. At first, my code got quite messy as I tried different things to make it work, so I went over it again and tried to simplify as much as possible. Later, I added Header and Footer components.

Another unexpected challenge was handling the SVG icons. In the provided design, the buttons are white and not black. The play button also appeared darker within the circle on hover. To achieve this effect, I modified the SVG file by adding fill="white" and applied clip-path: circle(50%) in AlbumImage.css to remove the square corners. Although a slight border remained, it was a close match given the available tools. For the other icons, I used CSS filter to switch from black to white, which worked effectively.

For the intermediate stretch goal, I created a lengthy function that uses a separator variable to display multiple artists, if there are any. I also lowered the opacity of the button icons, and made them full capacity on hover. 

If I had more time, I would try the advanced stretch goals and create different sections on my site.

### View it live

https://musicreleasesbyjoyce.netlify.app/
