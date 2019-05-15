export const between = (from, to, fromWidth, toWidth) => {
    const slope =  (to - from) / (toWidth - fromWidth);
    const base = from - slope * fromWidth;
    return `calc(${base}px + (100vw * ${slope}))`;
  }