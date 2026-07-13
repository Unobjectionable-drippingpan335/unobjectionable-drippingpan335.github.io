<<<<<<< HEAD
# Osama — Portfolio

A static portfolio site (plain HTML/CSS/JS, no build step) styled after academic personal sites,
built around the machine unlearning + Bangla NLP thesis.

## 1. What to edit before publishing

- `index.html`
  - Replace `your.email@example.com`, GitHub/LinkedIn/Scholar links, and `[Your Lab / Advisor Name]`
  - Rewrite the **About** paragraph in your own voice
  - Fill in real **Projects** repo links
  - Update the **Updates** timeline with real dates/milestones
  - Delete any `[Edit this...]` / `.edit-note` placeholder text once done
- `images/profile.jpg` — add a real photo here (square, at least 300x300px). If missing, the page shows a fallback initial instead of breaking.
- `cv.pdf` — drop your CV in the project root with this exact filename, or update the link in `index.html`.

## 2. Publish it on GitHub Pages

**Option A — personal/user site (URL: `https://your-username.github.io`)**

1. Create a new GitHub repo named **exactly** `your-username.github.io` (replace with your actual GitHub username).
2. From this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. Go to the repo → **Settings → Pages** → under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/(root)** → Save.
4. Wait 1–2 minutes, then visit `https://your-username.github.io`.

**Option B — project site (URL: `https://your-username.github.io/portfolio`)**

Same steps, but the repo can be named anything (e.g. `portfolio`), and your site will live at
`https://your-username.github.io/<repo-name>`.

## 3. Making future edits

Just edit the files locally, then:
```bash
git add .
git commit -m "Update content"
git push
```
GitHub Pages redeploys automatically within a minute or two.

## 4. Optional next steps

- Add a custom domain via repo **Settings → Pages → Custom domain**.
- Swap in real publications once your thesis produces a paper.
- If you'd rather use Jekyll/AcademicPages later (like the Omar Sharif site you referenced), that's a bigger theme with a Ruby build step — this plain version is meant to get you live today with zero dependencies.
=======
HI
>>>>>>> 676bf753ce586e0d8dd43de3222b45a1cf79168b
