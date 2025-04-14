Music Releases 🎵
This project is a React-based music release page that displays a list of albums and artists. The goal was to practice component structure, props, and styling, while ensuring a responsive and interactive user experience.

The Problem & Approach
The main challenge was to create a visually appealing album grid that adapts to different screen sizes while implementing interactive hover effects on album covers and text elements.

My Approach & Workflow
I started by building all the JavaScript code in one file to clearly see the structure from parent to child. This helped me visualize how the data was passed through props and ensured that everything worked properly before breaking it into components. I found this approach more effective and time-saving compared to starting with separate files right away.

Once everything functioned correctly, I divided the logic into planned components (Albums, Album, AlbumCover, AlbumName, and ArtistName). After that, I continued making minor tweaks within each component to refine styling and functionality.

Key Features & Solutions:
✅ Component-Based Structure: The app is split into reusable components: Album, AlbumCover, AlbumName, and ArtistName.
✅ Dynamic Hover Effects: Implemented overlays and icons that appear when hovering over an album, with smooth animations and scaling effects.
✅ Responsive Design: Ensured the layout adjusts dynamically (4 albums per row on desktop, 2 per row on tablet, and 1 per row on mobile).
✅ Accessible Links: Each album title and artist name links to their respective Spotify pages.

Technologies Used
🟢 React (Component-based architecture)
🎨 CSS (Flexbox, Grid, transitions, hover effects)
📡 Fetching Data (from a JSON file)
Next Steps & Improvements
🚀 Add more accessibility features (e.g., focus styles for keyboard navigation).
📱 Improve animations for a more polished UX.
🎶 Implement a real API instead of static JSON data.

### View it live

https://tunevault.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
