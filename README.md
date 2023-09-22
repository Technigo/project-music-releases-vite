<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

Aim: To practice React and create components that will be using data from Spotify from which data will then be transferred to its children components using props.

A page will be built to show new album and single releases.

## Getting Started with the Project

**data.json** 
- JSON file containing 1 key called "albums" containing keys mimiquing a Spotify API object endpoint.

**Parent component:**
- App.jsx
**Child components of App.jsx:**
- Album.jsx
- Header.jsx
**Child components of Album.jsx:**
- AlbumName.jsx
- ArtistName.jsx
- CoverImage.jsx

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies and opening up the project on VS Code 

```bash
npm i && code . 
```

and it will run a development server on your terminal:

```
npm run dev
```

### The Problem

**Used:**
- Notion course material and Technigo code session
- Chat GPT
- Stack overflow
- Team members' help

Using artist id as the unique key was the simplest way to proceed.
A lot of error messages arose from the linter that was disabled after tips from code session and team members.
Avoid using Uppercase when naming folders that have same name as a jsx file as React can get confused- but I was not allowed by React to change it afterwards, AND the code is not broken.
When starting CSS styling, no expected response.  Had to write down all the sections/divs created in the components to get a better insight of which to get rid of.
Had a hard time to change the colour of svg icons - through the code at source file, when integrated into the component's function (all kebab-case attributes then needed to be changed to camelCase), with css using `fill` attribute.  Got the tips from Hang during demo- `filter:inverted(1)`.


Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? 

If you had more time, what would be next?
Would have liked to give the stretched goals a try.

### View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
