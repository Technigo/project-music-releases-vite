# Instructions

## 🎶 Music releases

Since the focus of this assignment is to practice with React, we've downloaded a response from the Spotify API which you can use, rather than calling the API yourself.

## Requirements

✓ Your app should have components

✓ Your page should look as close as possible to the design provided.

✓ You should display the following for each album:

-   album cover image
-   album name
-   the name of each artist involved with a comma between

✓ Hover effects:

-   When you hover over an album, it should go darker, and you should show a play button, a favourite button, and the ellipsis (see the design sketch)
-   When you hover over the play button, it should grow (see the design sketch)
-   Hovering an artist name or an album name should match the design sketch

✓ When you click on the album, it should link to the album's external url in the data

✓ When you click on an artist, it should link to the artist's external url in the data

✓ Your page should be responsive:

-   showing 4 albums per row on desktop
-   2 per row on tablet
-   1 per row on mobile.

## 🎶 How to use the Spotify data & construct your components 🤓

In the `/src/data.json`, we've included an API response from Spotify which contains data for 50 recent releases. You can `import` this JSON file into a component using `import data from './data.json'` (which we've already done for you in the App component).

The result of importing the JSON is a variable called `data` which includes the full JSON response. Your task is to use this, along with `.map()` to mount an 'Album' component for each album. Within those components, you could then break things up further. For example, your app could have a structure like this:

- `App` component which has the `data`
  - `Album` component which is rendered using `.map()` and which you pass the album data into using props.
    - `ArtistName` component which is rendered using `.map()` using each item in the `artists` array. The `Album` component to show the artist name and a link.

This is just a suggestion - how you decide to structure your components is completely up to you.

## Folder Structure

- App.jsx - (Parent Component) - 🍿 Provided in Boiler Plate 🍿
- Album.jsx - (Child Component of App.jsx) - 🤓 Not Provided, to be created 🤓
  - AlbumName.jsx - (Child Component of Album.jsx) - 🤓 Not Provided, to be created 🤓
  - ArtistName.jsx - (Child Component of Album.jsx) - 🤓 Not Provided, to be created 🤓
  - CoverImage.jsx - (Child Component of Album.jsx) - 🤓 Not Provided, to be created 🤓
  - Header.jsx - (Child Component of Album.jsx) - 🤓 Not Provided, to be created 🤓

### Extra Files

- data.json - JSON file containing 1 key called `"albums"` containing keys mimiquing a Spotify API object endpoint.

## You should display the following for each album:

- album cover image
- album name
- the name of each artist involved with a comma between

## Hover effects:

- When you hover over an album, it should go darker, and you should show a play button, a favourite button, and the ellipsis (see the design sketch)
- When you hover over the play button, it should grow (see the design sketch)
- Hovering an artist name or an album name should match the design sketch

## External Routing:

- When you click on the album, it should link to the album's external URL in the data
- When you click on an artist, it should link to the artist's external URL in the data

### Your page should be responsive:

- showing 4 albums per row on desktop
- 2 per row on tablet
- 1 per row on mobile.

## Design

🎶 You should follow the design screenshots as closely as possible. We've provided icons for the play, heart and more info icons when hovering on an album. Use the following for fonts:

- Album title - 14px Helvetica #ffffff
- Artist name - 14px Helvetica #a0a0a0

  When hovering over album covers or artist names, you should implement the following hover styles:
   <img src="/src/assets/boiler.svg" alt="Project Banner Image">
