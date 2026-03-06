# Personal Website

## Preview

Run the local preview server from the project root:

```powershell
.\preview.ps1
```

Then open:

```text
http://127.0.0.1:8000
```

## Structure

```text
.
|-- index.html
|-- preview.ps1
|-- README.md
|-- assets
|   |-- css
|   |   |-- style.css
|   |   `-- project-style.css
|   |-- js
|   |   `-- script.js
|   `-- images
`-- projects
    |-- project1.html
    |-- project2.html
    |-- project3.html
    |-- game-project1.html
    |-- game-project2.html
    |-- software-project1.html
    |-- software-project2.html
    |-- software-project3.html
    |-- research-project1.html
    |-- research-project2.html
    |-- research-project3.html
    |-- video-project1.html
    |-- video-project2.html
    |-- video-project3.html
    |-- video-project4.html
    |-- photography-project1.html
    |-- photography-project2.html
    |-- photography-project3.html
    |-- volunteer-project1.html
    |-- volunteer-project2.html
    |-- volunteer-project3.html
    |-- volunteer-project4.html
    |-- award-project1.html
    |-- award-project2.html
    `-- award-project3.html
```

## Notes

- `index.html` is the homepage entry.
- `projects/` contains all detail pages.
- `assets/css/` stores homepage and detail page styles.
- `assets/js/script.js` handles navigation, tabs, back-to-top, and image modal behavior.
- `assets/images/` stores all image assets used by the site.
