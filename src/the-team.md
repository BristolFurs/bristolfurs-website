---
# Technical data
layout: generic-landing.njk

# Content
title: Meet the BristolFurs team
lede: Furmeets are hard. Round of applause for those who make them happen. 👏👏👏
---

{% from "components/person.njk" import person %}

## Governing committee

In tempor est et voluptate. Lorem commodo amet proident proident fugiat Lorem deserunt est sint commodo consectetur amet laborum amet. Officia non et consequat nostrud esse excepteur.</p>

<div class="bf-grid-cards">
{%- for item in staff.committee %}
  {{ person(item) }}
{%- endfor %}
</div>
    
## Meet moderators
    
Exercitation ex cupidatat exercitation excepteur cillum tempor ut excepteur incididunt. Voluptate qui laboris nostrud quis laboris laborum labore occaecat labore tempor irure dolor ad. Quis commodo dolore ea occaecat ipsum non.
    
<div class="bf-grid-cards">
{%- for item in staff.meetModerators %}
  {{ person(item) }}
{%- endfor %}
</div>
    
## Chat moderators

Proident nulla dolore sunt ipsum deserunt. Commodo ullamco fugiat nulla irure consectetur. Do Lorem quis sunt nostrud. Tempor voluptate excepteur ex eiusmod ipsum sunt.

<div class="bf-grid-cards">
{%- for item in staff.chatModerators %}
  {{ person(item) }}
{%- endfor %}
</div>
    
## Fursuit walk volunteers

Many meets have volunteers to assist with the fursuit walk. They get to wear funky purple hi-vis vests! Thank you, random volunteers.
