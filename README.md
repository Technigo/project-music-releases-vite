<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

A React app template to display albums. Features include a structured component hierarchy, design fidelity, hover effects, and responsive layouts. Clicking on albums or artists links to external URLs. Components provided; focus on data flow and UI interactions.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Structure
Main.jsx > App.jsx > Album.jsx. Album.jsx has 3 children: AlbumImage.jsx, Artists.jsx, Header.jsx

Main problem: My main problem was getting a comma to separate artists, when an album has multiple artists. I tried several approaches, even tried to restructure my code, but was not successful. At this time, artists are listed on separate lines and artist name is passed to the module from its parent (Album.jsx) as a string (I think this needs to be an array, but I wasnt able to fix it.

I think if I was to do this project again I would rethink my module hierachy, I need a separate module for Album name and need to pass different props to my Artist module as this is probably the issue regarding my comma problem.

If I had more time: I would fix the comma problem and restructure all modules. My project works but I can see the structure and what props I have chosen to pass on are not done efficiently.

### View it live

https://wk5-project-music-releases-vite-6e0.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
