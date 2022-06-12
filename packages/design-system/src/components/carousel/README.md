# Carousel

## Goal

Design a react hook that implements the carousel or carousel pattern

## Todo

- Implement the autoplay pattern
- Add support for `breakpoints`, `slidesPerView` and `spacing`
- Add support for custom transition types. `slide`, `fade`, etc.

## Best Practices

- Provide a pause button and do NOT use autoplay (this can cause seizures).
- All slideshow/carousel navigation and pause/play buttons must be keyboard
  accessible and have adequate color/contrast ratios.
- Ensure the hover and focus states are visibly obvious.
- Include 5 or fewer elements in the carousel (suggested by Nielsen Norman
  Group).

## Known Bugs:

- When slides per view is `1`, and spacing is added, it messes up with the
  `translateX` calculation
