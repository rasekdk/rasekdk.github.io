import type { FontIncrement } from "@/interfaces/Fonts";

const HEADING_SIZE_INCREMENT: FontIncrement = {
  h1: {
    mobile: 13,
    desktop: 16,
  },
  h2: {
    mobile: 10,
    desktop: 10,
  },
  h3: {
    mobile: 9,
    desktop: 9,
  },
  h4: {
    mobile: 8,
    desktop: 8,
  },
  h5: {
    mobile: 6,
    desktop: 6,
  },
  h6: {
    mobile: 5,
    desktop: 5,
  },
};

const PARAGRAPH_SIZE_INCREMENT: FontIncrement = {
  p: {
    mobile: 4,
    desktop: 4,
  },
  small: {
    mobile: 3,
    desktop: 3,
  },
};

export { HEADING_SIZE_INCREMENT, PARAGRAPH_SIZE_INCREMENT };
