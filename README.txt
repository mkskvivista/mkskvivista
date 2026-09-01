Local preview and GitHub push instructions

1) Save files
   - Put index.html, styles.css, script.js, CNAME (optional), README.txt, and logo.png into a folder called vivista-site.

2) Local preview (optional)
   - In the vivista-site folder run:
       python3 -m http.server 8000
     Open http://localhost:8000

3) Paste files into your cloned repository root
   - Clone your repo (if you haven't already):
       git clone https://github.com/mkskvivista/mkskvivista.git
       cd mkskvivista

   - Copy the files from your vivista-site folder into the repository root (overwrite existing files):
     macOS / Linux:
       cp -r /full/path/to/vivista-site/* .
     Windows PowerShell:
       Copy-Item -Path 'C:\full\path\to\vivista-site\*' -Destination . -Recurse -Force

4) Commit and push (replace main with your default branch if needed)
   git add .
   git commit -m "Add Vivista IT Solutions static site (Analytics + DevOps)"
   git push origin main

5) Enable GitHub Pages
   - Go to repository Settings -> Pages
   - Source: choose branch main (or default) and folder / (root)
   - Save and wait 30–60 seconds for the site to publish

6) Published preview URL
   - https://mkskvivista.github.io/mkskvivista/

7) Notes
   - If you included CNAME and want the custom domain vivista.in served, update DNS at your domain registrar to point to GitHub Pages (add A records or CNAME). I can give exact DNS instructions if you want.
   - If you want me to verify after you push, paste the repo link or the Pages URL here and I’ll check and suggest any final small adjustments.