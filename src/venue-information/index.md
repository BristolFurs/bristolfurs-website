---
# Technical data
layout: generic-landing.njk

# Content
title: Our venues
lede: How to get to our meeting spots and what to expect when you get there.
---

{% from "components/brochure.njk" import brochure %}

{% call brochure({
  title: {
    text: "The Boardroom"
  },
  href: "/venue-information/the-boardroom/",
  button: {
    html: '<span class="bf-!-sr">The Boardroom</span> Venue information'
  },
  image: {
    src: "//placeholder.rocks/600/600/1",
    alt: "Placeholder image"
  }
}) %}

  <p>The main venue where we do our meets.</p>
{% endcall %}

{% call brochure({
  title: {
    text: "Starbucks Temple Quay"
  },
  href: "/venue-information/starbucks-temple-quay/",
  button: {
    html: '<span class="bf-!-sr">Starbucks Temple Quay</span> Venue information'
  },
  image: {
    src: "//placeholder.rocks/600/600/2",
    alt: "Placeholder image"
  }
}) %}

  <p>Home of the pre-meet, located conveniently next to Temple Meads Railway Station.</p>
{% endcall %}
