# CSS and folder split

This repo was reorganized to support clean URLs and page-level CSS/JS.

## Structure

- `/css/main.css` = shared variables, header, nav, buttons, cards, footer, responsive/global polish.
- `/css/forecast.css` = forecast page and 12-week FPA chart.
- `/css/conditions.css` = conditions, beach/pier condition layouts.
- `/css/rankings.css` = ranking tables and controls.
- `/css/species.css` = species listing and species controls.
- `/css/landings.css` = landings directory and pricing.
- `/css/reports.css` = daily reports.
- `/css/news.css` = news page.
- `/css/details.css` = boat, landing, and species detail pages.
- `/css/gear.css` = gear/affiliate pages.

Each clean URL page now lives in its own folder with `index.html` and its matching JS when available, for example `/forecast/index.html` + `/forecast/forecast.js`.

The original root `.html` files are left as redirect stubs so old links like `/forecast.html` forward to `/forecast/`.

`site-config.js` now makes data file requests root-relative so JavaScript moved into page folders can still load JSON files from the site root.
