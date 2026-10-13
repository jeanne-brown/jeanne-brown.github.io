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

<div class="publications">

## Journal Articles

{% bibliography --query @article --sort_by year --order descending %}

## Manuscripts & Preprints

{% bibliography --query @unpublished --sort_by year --order descending %}

## Proceedings Papers

{% bibliography --query @inproceedings --sort_by year --order descending %}

## Conference Presentations & Posters

{% bibliography --query @misc --sort_by year --order descending %}

</div>
