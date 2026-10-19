---
layout: page
permalink: /fr/publications/
title: Publications
description: Publications en ordre chronologique inverse
nav: false
nav_order: 2
---

<!-- _pages/publications_fr.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<hr>

## Articles de revue

<div class="publications">
{% bibliography --query @article --sort_by year --order descending %}
</div>

<hr>

## Manuscrits & Prépublications

<div class="publications">
{% bibliography --query @unpublished --sort_by year --order descending %}
</div>

<hr>

## Actes de conférence

<div class="publications">
{% bibliography --query @inproceedings --sort_by year --order descending %}
</div>

<hr>

## Présentations & Affiches

<div class="publications">
{% bibliography --query @misc --sort_by year --order descending %}
</div>
