---
layout: generic-landing.njk
title: Our venues
lede: How to get to our meeting spots and what to expect when you get there.
---

{% renderTemplate "webc" %}

<bf-brochure :params="({
  name: 'The Boardroom',
  href: '/venue-information/the-boardroom/',
  image: {
    src: '//placeholder.rocks/600/600/1'
  }
})">

<div class="bf-prose" slot="body">
<p>The main venue where we do our meets.</p>
</div>
<span slot="button">
<span class="bf-!-sr">The Boardroom</span>
Venue information
</span>
</bf-brochure>

<bf-brochure :params="({
  name: 'Starbucks Temple Quay',
  href: '/venue-information/starbucks-temple-quay/',
  image: {
    src: '//placeholder.rocks/600/600/2'
  }
})">

<div slot="body" class="bf-prose">
<p>Home of the pre-meet, located conveniently next to Temple Meads Railway Station.</p>
</div>
<span slot="button">
<span class="bf-!-sr">Starbucks Temple Quay</span>
Venue information
</span>
</bf-brochure>

{% endrenderTemplate %}
