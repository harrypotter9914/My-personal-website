# Portfolio content and presentation

Updated November 4, 2026. This remains a buildless GitHub Pages website.

## Shared design

- `assets/css/studio.css`: shared cool-neutral visual system, homepage, and core case studies. On legacy pages it loads after `project-style.css` to preserve existing galleries and content structure.
- `assets/js/studio.js`: click-to-load video, selected/complete portfolio tabs, keyboard-accessible image dialog.
- `assets/js/script.js`: retained archive, navigation, and legacy gallery interactions.

## Core work

| Page | Project | Latest YouTube film | Selected / complete |
|---|---|---|---|
| `projects/project2.html` | Babel | `SPEH-DODZ7I` | 7 / 12 pages |
| `projects/sky-hamster.html` | Sky Hamster | `iNOELVQz9kg` | 8 / 10 pages |
| `projects/project1.html` | Fit to Pass | `_GRWXU7BOKU` | 8 / 10 pages |
| `projects/project3.html` | Echo of Crash | `B0FBTVE2i0M` | 8 / 18 pages |

`assets/portfolio/` contains the original selected and complete PDFs, optimized WebP page renders, promotional film covers, and gameplay frames used on the homepage. Videos are streamed from the author's existing YouTube uploads rather than committed as large MP4 files. PDF images are loaded lazily. The supplied PDF designs are preserved; the website presentation around them is redesigned.

Existing case-study URLs, additional projects, analytics ID, portrait, and contact email are retained. Puzzlehand is now under Additional Games. The current Babel project is Unity 6, not the older custom-engine description.

## Local check

Babel is the wide flagship card; Sky Hamster, Fit to Pass, and Echo of Crash follow as three equally visible core projects. Each page links to its verified public repository and code guide. Sky Hamster requires Playdate hardware (not a native Windows build); its video is Simulator capture. Echo exposes a source snapshot rather than a complete Unreal project. Babel's source/build is v0.57 while its visual PDF records v0.56. The first three source PDFs were rechecked against Desktop copies and remained byte-identical on November 4.

Serve the repository using any static HTTP server. Check desktop and narrow mobile layouts, the archive tabs, both portfolio editions, image enlargement and Escape-to-close, YouTube playback links, demo links, and PDF downloads.

Keep claims about authorship and testing accurate: gameplay/design contributions are distinguished from external and AI-assisted art/audio; creator-led checks are not presented as a formal external player study.
