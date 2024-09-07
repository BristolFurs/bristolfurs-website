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
    text: "The Boardroom"
  },
  href: "/venue-information/the-boardroom/",
  button: {
    html: '<span class="bf-!-sr">The Boardroom</span> Venue information'
  },
  image: {
    src: "boardroom.jpg",
    alt: "The front of an old stone building, a pub, painted teal on the lower floor and white on the upper floors and decorated with hanging flower baskets and fairy lights.",
    credit: "Taylor Erise"
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
    src: "starbucks-placeholder.jpg",
    alt: "A Starbucks branded paper cup standing on a table and reflecting on the window behind it.",
    credit: "Unsplash: introspectivedsgn"
  }
}) %}

  <p>Home of the pre-meet, located conveniently next to Temple Meads Railway Station.</p>
{% endcall %}
