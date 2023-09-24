<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases React App

This repository showcases a React application focusing on utilizing Spotify API data to display music releases. The project demonstrates essential React concepts and component structuring.

## Project Challenges

During the development of this project, I encountered several challenges:

1. **Learning React and Component Structuring:**
   - As my first time working with React, adapting to a component-based approach was quite challenging. I did a bit of experimentation with different component structures and prop passing mechanisms to grasp this new way of thinking.

2. **Artist Component and Formatting:**
   - Creating the artist component and ensuring correct formatting with commas and ampersands posed a challenge. The current approach, utilizing ternary operators, was a new technique for me but something I think will be useful in other contexts as well.

3. **Icon Image Display Issue:**
   - Initially, I faced challenges with the proper display of icon images. Moving them to the public folder resolved this issue, allowing the images to display correctly.

## Files Overview

### `App.jsx`

- Initializes the main component of the app.
- Utilizes components like `Header` and `AlbumCard`.
- Passes Spotify API data as props to `AlbumCard`.

### `AlbumCard.jsx`

- Renders album details using data from Spotify API.
- Uses `map` to create components for each album.
- Components created: `AlbumCover`, `AlbumName`, and `ArtistName`.

### `Header.jsx`

- Displays the header of the app.
- Contains the title and project information.

### `AlbumCover.jsx`

- Renders the album cover, play button, heart icon, and more.
- Utilizes data from Spotify API.

### `AlbumName.jsx`

- Displays the album name.
- Links to the Spotify page for the album.

### `ArtistName.jsx`

- Renders artist names for each album.
- Handles comma and ampersand formatting.

## Additional Information

- **Data Source:**
  - The application fetches music release data from a pre-downloaded response mimicking the Spotify API.

- **Responsive Design:**
  - The page layout adjusts dynamically based on the user's device, displaying albums in the following layouts:
    - Desktop: 4 albums per row
    - Tablet: 2 albums per row
    - Mobile: 1 album per row

- **Hover Effects:**
  - **Album Hover Effect:**
    - When hovering over an album, it darkens and reveals interactive icons such as a play button, a favorite button, and an ellipsis.
  - **Play Button Hover Effect:**
    - The play button enlarges when hovered over, providing visual feedback to the user.
  - **Artist and Album Name Hover Effect:**
    - Hovering over artist and album names underlines the text, enhancing user interaction.

- **External Routing:**
  - Clicking on an album directs the user to the album's external URL as provided in the data.
  - Clicking on an artist's name redirects the user to the respective artist's external URL sourced from the data.

## View it live

You can view the live version of the project [here](https://music-releases-veronica-astrom.netlify.app/).
