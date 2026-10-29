# Ashik R S — Mobile Developer Portfolio

A ready-to-publish, responsive portfolio built with **HTML + CSS + vanilla JavaScript**. No npm packages, frameworks, build commands, API keys, or backend are required.

## What is inside

- `index.html` — all website content
- `assets/css/style.css` — layout, responsive styles, light/dark themes
- `assets/js/main.js` — mobile menu, theme toggle, project filters, case studies, copy email
- `assets/images/favicon.svg` — custom vector favicon
- `assets/resume/Ashik_RS_CV.pdf` — attached ATS-friendly CV
- `.nojekyll` — instructs GitHub Pages to publish static files directly

## Preview locally

Double-click `index.html` to open it in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 . The site works without an internet connection.

## Publish with GitHub Pages — easiest option

1. Log in to GitHub and create a new **public** repository named `portfolio` (or any name you prefer).
2. Upload the **contents of this folder** to the repository root, including `index.html` and `.nojekyll`. Do **not** upload the ZIP itself as your only file.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Set **Branch: `main`** and **Folder: `/(root)`**, then **Save**.
6. Your site will appear at `https://YOUR_USERNAME.github.io/portfolio/` (replace placeholders with your actual GitHub username and repository name).

You can alternatively name the repository `YOUR_USERNAME.github.io` for a user homepage at `https://YOUR_USERNAME.github.io/`.

## Publish using Git on the command line

```bash
cd ashik-rs-portfolio
git init
git add .
git commit -m "Launch developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Create the matching empty repository on GitHub **before** running the push. Then enable GitHub Pages in Settings as described above.

## Personalize

- **Name, headline, and text:** edit `index.html`.
- **Project case-study details:** edit the `CASE_STUDIES` object in `assets/js/main.js` and project cards in `index.html`.
- **Colors:** edit CSS variables at the top of `assets/css/style.css`.
- **Resume:** replace `assets/resume/Ashik_RS_CV.pdf` with your newest CV, keeping the filename or updating the link in `index.html`.
- **Contact:** update the `mailto:` links and LinkedIn URL in `index.html`.
- **GitHub profile or project repository links:** add only once you have public links you want to share. None are invented here.

## Privacy / accuracy checklist before publishing

- This portfolio is public. The included PDF CV contains your phone number; remove it if you prefer not to publish your phone number.
- All illustrations are decorative concepts and **not actual app screenshots**.
- Replace/remove high-level project details if your employer restricts what may be shared publicly.
- Project claims and timeline reflect information supplied for the CV; confirm any changes before publishing.

## Tech and compatibility

- Works from a GitHub Pages repository root **or** a project subpath because all local asset links are relative.
- All scripts and styles are self-contained; no external CDN dependencies.
- Uses semantic HTML, keyboard-accessible controls, reduced-motion preferences, and responsive layouts.
- The contact button opens the user's email app; there is **no fake server contact form**.

Based on GitHub's official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
