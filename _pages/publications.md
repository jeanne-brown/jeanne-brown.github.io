---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

## Preprints
{% bibliography --query @*[bibtex_show=true and type="preprint"] %}

## Journal Articles
{% bibliography --query @*[bibtex_show=true and type="journal"] %}

## Conference Presentations
{% bibliography --query @*[bibtex_show=true and type="conference"] %}

</div>
