# Music Releases
This project is a web application designed to display a collection of albums, with additional features like album details, a play button to launch albums in Spotify, and a sidebar showcasing editor’s picks. It pulls data from a Spotify API and uses that information to render album covers, names, and artist details. The app is structured using React components, each serving a specific purpose to ensure modularity and reusability.

# Key Features
Album List:
The main section of the app displays a list of albums fetched from the Spotify API. Each album card contains:

Album Cover: Displays the album’s artwork.

Album Name: Links to the album's Spotify page.

Artist Name: Shows the name of the artist(s) associated with the album.

Play Button: Opens the album's Spotify page when clicked, enabling users to listen to the album directly in Spotify.

Sidebar with Editor’s Picks: Displays a list of curated playlists called "Editor's Picks."

# Tech Stack
React: Used to create reusable components and manage application state.

PropTypes: For type-checking component props to ensure the correct data is passed to components.

Spotify API: To fetch album data (album details, cover images, artist names, etc.).
CSS: Custom styling to match the given design, ensuring that the album cards, play buttons, and sidebar look cohesive and visually appealing.

# Challenges & Solutions
Design Consistency: One of the main challenges in this project was adhering to the design specifications provided. To address this, I followed a structured approach:

I built reusable components to maintain consistency in the layout and UI elements (e.g., album card components, play button, sidebar components).
The app’s CSS was structured in a way that each component was easily styled, and custom media queries were used for responsive design.

API Data Handling: Handling asynchronous data fetching from the Spotify API required ensuring that the album data was properly loaded before rendering the components. I used the map() function to iterate through the album and playlist data and render the appropriate content.

# Future Enhancements
Album Search: Implement a search feature that allows users to search for albums by name, artist, or genre.

Album Details Page: Expand the functionality by adding an album details page that includes track listings, release date, and additional information.

User Authentication: Integrate Spotify’s OAuth to allow users to log in and personalize their album lists.

### View it live
https://gittes-music-release.netlify.app
