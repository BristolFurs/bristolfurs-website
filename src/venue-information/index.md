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
    text: "Colosseum"
  },
  href: "/venue-information/colosseum/",
  button: {
    html: '<span class="bf-!-sr">Colosseum</span> Venue information'
  },
  image: {
    src: "colosseum.jpg",
    alt: "Photograph of a rather plain, boxy brick building. Part of the outside is covered by a green and white veranda. The word 'Colosseum' is written in large, yellow letters on the side of the building.",
    credit: "beeps"
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
    credit: "introspectivedsgn (Unsplash)"
  }
}) %}

  <p>Home of the pre-meet, located conveniently next to Temple Meads Railway Station.</p>
{% endcall %}

{% call brochure({
  title: {
    text: "The Royal Oak"
  },
  href: "/venue-information/the-royal-oak/",
  button: {
    html: '<span class="bf-!-sr">The Royal Oak</span> Venue information'
  },
  image: {
    src: "the-royal-oak.jpg",
    alt: "Photo of a building with a publican sign of a squirrel wearing a crown, with 'Royal Oak' written below it.",
    credit: "The Royal Oak"
  }
}) %}

  <p>The hosts of our tabletop mini-meets.</p>
{% endcall %}
