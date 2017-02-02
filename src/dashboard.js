// need quotes
import * as d3 from 'd3';

console.log("loaded", d3);

// cannot do const draw
// then export draw
// need to export const draw
export const draw = () => {
  console.log("Draw!!!!");
}
