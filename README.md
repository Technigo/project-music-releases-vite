<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

This project is a React application that uses a response from the Spotify API to display recently released albums. The assignment was to practice React by importing and presenting the JSON data provided in the project.

### The Assignment
The task was to build an application that retrieves album data from a JSON file and presents them in a grid layout. Each album card shows the album cover, album title, and artist name. The assignment also involved implementing hover effects, external links to albums and artists, and making the page responsive.

### The Problem and My Solution

I approached the problem by first structuring the components clearly. I used React's map() method to iterate over the album data and create an album card for each item. By breaking things down into smaller components like AlbumCard and ArtistName, I kept the code modular and reusable.

### Technologies used:

- **React** for component management and rendering data.
- **CSS Grid** for layout and flexible columns to handle different screen sizes.
- **CSS transitions and hover effects** to create an interactive user experience.

### Challenges

- **SVG files:** It was tricky to get the SVG files to turn white and work correctly with the hover effects.
- **Hover effects:** I had difficulty implementing the hover effect on the album cards, especially making the play button grow and the album cover darken when hovered over.
- **Artist names:** Formatting the artist names with commas between them was challenging. It required specific handling of the artist data from the JSON file.
- **Project structure:** Since the project contained many files, it was difficult to navigate and understand what all the files did initially. But over time, I got a better understanding of the structure.

### Responsive Design
- **Desktop:** Displays four albums per row.
- **Tablet:** Displays two albums per row.
- **Mobile:** Displays one album per row.

### View it live

https://project-music-releases-melodify.netlify.app/