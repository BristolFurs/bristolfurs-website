---
# Technical data
layout: landing.njk

# Content
title: Our venues
lede: How to get to our meeting spots and what to expect when you get there.
---

{% from "components/brochure.njk" import brochure %}

{% call brochure({
  title: {
    text: "The Colosseum"
  },
  href: "/venue-information/the-colosseum/",
  button: {
    html: '<span class="bf-!-sr">The Colosseum</span> Venue information'
  },
  image: {
    src: "colosseum.jpg",
    alt: "Photograph of a stone brick bar, behind which are a number of taps and a wall decorated with stone brick and a variety of shelves with bottles of spirits.",
    credit: "The Colosseum"
  }
}) %}

  <p>Our current home away from home.</p>
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
    src: "starbucks-placeholder.jpg",
    alt: "A Starbucks branded paper cup standing on a table and reflecting on the window behind it.",
    credit: "Unsplash: introspectivedsgn"
  }
}) %}

  <p>Home of the pre-meet, located conveniently next to Temple Meads Railway Station.</p>
{% endcall %}
