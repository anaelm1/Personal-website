## Portfolio Website 
This project is a personal website for myself. It showcases all my projects and has some cool features aswell. The theme is minecraft as I grew up playing it.

Check it out at: [Website](<https://personal-website-ashen-tau-20.vercel.app/index.html>)

## Initial Planning
The planning for each page is:
- Index: This will be a home page. The background with be a animated landscape of minecraft which will do the whole day/night cycle. There will be an option to change into other biomes background as well like plains, mushroom island, forest etc. Over the background, there is going to be basic headings and stuff with 3 minecraft menu like buttons for About, projects and github. A footer as well with socials. 

- Projects: All the projects are going to be placed in a chest which then open ups with each project in one tile. 

- About is going to have a minecraft steve 3d on one side with my name tag and the details on the other side. 

- The whole website will have a custom cursor like the minecraft one and clicking stuff will make the click sound as well.

## Tech Stack
I wanted to use node js for this website, cuz I wanted to learn it. However, I realized that it could be easily done with basic HTML, CSS, and Javascript. That' why this website is built using those three with the skin render made using a prebuilt repo on Github.

## Description of Each Page
1. Homepage: This page mimics the actual minecraft loading screen with the background music as well. The yellow text is also changed on each reload.
2. Projects Page: While building, I thought to make all my projects as different worlds, so this page showcases all my projects, each being a world. There are buttons to go to the repo/demo as well, and I used diamont and emerald Ingots to specify the project type (hardware/software)
3. About Page: This page is definitely my favourite. It has a short description of me on the left side and a contact bar with my socials which looks exactly like the inventory in Minecraft. On the right side, I rendered an interactive 3D player using skinview3d (repo has the same name). The player's head follows your cursor, and the coolest thing is that the player nods when you hover over the contact bar.
4. Options Page: I haven't made this, but I have big plans for it. I want to add things like paronama selector and music changer.
5. Quit Game: No need for a description!

## How to Run Locally

Because this project uses static HTML, CSS, JavaScript, and ES modules (`<script type="module">`)[cite: 1] with files loaded from `assets/`[cite: 1], running it through a local web server is recommended (opening `index.html` directly via `file://` can cause issues with module imports or local assets in some browsers).

### 1. Clone or Download the Repository

```bash
git clone https://github.com/anaelm1/Personal-website
cd <Personal-website>
```

### 2. Start a Local Server

Choose whichever option you have available:

* **VS Code:** Open the project folder, install the **Live Server** extension, open `index.html`, and click **Go Live**.
* **Python:**
  ```bash
  python -m http.server 8000
  ```
* **Node.js:**
  ```bash
  npx serve
  ```

### 3. Open in Your Browser

Open the local URL shown in your terminal or editor (usually `http://localhost:8000` or `http://127.0.0.1:5500`).

### Notes

* The 3D character viewer in `about.html` imports `skinview3d` from `https://cdn.jsdelivr.net/npm/skinview3d/+esm`, so an internet connection is needed to load that module.

## AI Usage

I tried my best to avoid AI, but these are the places where it was used:

- The design choices and values, such as the colors of each line, were given by Gemini since I wanted to recreate the Minecraft menu exactly. However, it did not write the CSS directly.
- Help with the final head nodding JavaScript code, such as recommending the use of trigonometric functions to make the motion smooth.
- Code debugging.

## Future plans
This is the start of this project. I have so many ideas and easter eggs in mind, and I plan on adding all of them in the future. 

## Note 
This project is made in HackClub Crossroads.
