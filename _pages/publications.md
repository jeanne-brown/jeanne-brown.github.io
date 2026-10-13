---
layout: page
permalink: /publications/
title: Publications
description: Publications in reverse chronological order
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## Journal Articles

<div class="publications">
{% bibliography --query @article --sort_by year --order descending %}
</div>

<hr>

## Manuscripts & Preprints

<div class="publications">
{% bibliography --query @unpublished --sort_by year --order descending %}
</div>

<hr>

## Proceedings Papers

<div class="publications">
{% bibliography --query @inproceedings --sort_by year --order descending %}
</div>

<hr>

## Conference Presentations & Posters

<div class="publications">
{% bibliography --query @misc --sort_by year --order descending %}
</div>
