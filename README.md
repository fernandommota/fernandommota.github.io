# fernandommota.github.io

Academic website of Fernando Maia da Mota, built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and published at <https://fernandommota.github.io>.

## Editing

| What | Where |
|---|---|
| Bio and profile | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` (`selected = {true}` shows the paper on the home page) |
| News | one file per item in `_news/` |
| Projects | `_projects/` |
| CV | `_data/cv.yml` |
| Social links | `_data/socials.yml` |
| Site settings | `_config.yml` |

## Running locally

```bash
docker compose -f docker-compose-slim.yml up
```

Then open <http://localhost:8080>.

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and pushes it to the `gh-pages` branch. GitHub Pages serves that branch.
