---
layout: page
title: Rampart
description: reproducible benchmarks of data-processing paradigms with automated anti-leakage checks
importance: 2
category: software
related_publications: true
---

Rampart is an open-source framework that runs the same walk-forward validation pipeline across three data-processing paradigms and enforces anti-leakage invariants along the way.

It treats prediction equivalence as a validity condition: latency is only compared across paradigms when they produce the same predictions. Runs are bitwise reproducible. On two public time-series panels, Rampart shows a latency crossover that depends on data scale, and new paradigms can be added with little engineering effort.

{% bibliography --cited_in_order --query @*[key=xavier2026rampart]* %}
