---
layout: page
title: PBI Grid
description: dashboard as code for Power BI reports that follow the GovBR standard
importance: 1
category: software
related_publications: true
---

[PBI Grid](https://github.com/OESNPG/pbi-grid) is an open-source command-line tool that compiles declarative YAML layouts into Power BI Enhanced Report Format (PBIR) files.

Power BI reports store each visual with absolute pixel coordinates, which makes them hard to review, reuse and keep consistent. PBI Grid replaces that with:

- a declarative language based on a 12-column grid;
- a deterministic layout engine that turns the grid into PBIR coordinates;
- a theming system, with a reference `govbr` package that encodes the visual identity of the Brazilian Government Digital Standard (GovBR).

The tool was used to rebuild a production CAPES dashboard under GovBR. On the bundled example, the layout specification is about 89% smaller than the PBIR it generates, and it can go through code review and continuous integration. An `extract` command rebuilds the YAML from existing reports, so teams can adopt it gradually.

- Code: [github.com/OESNPG/pbi-grid](https://github.com/OESNPG/pbi-grid) (MIT License)
- Archived release: [doi.org/10.5281/zenodo.22135423](https://doi.org/10.5281/zenodo.22135423)
- Demo video: [zenodo.org/records/21462034](https://zenodo.org/records/21462034)

{% bibliography --cited_in_order --query @*[key=mota2026pbigrid]* %}
