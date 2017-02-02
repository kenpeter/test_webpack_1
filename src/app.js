import { groupBy } from "lodash/collection";
import people from "./people";
import "./style.scss";
import img_path from "./code.png";

let output = groupBy(people, "manager");


// const
// root
// http://www.w3schools.com/jsref/met_document_queryselector.asp
// document
// query selector
// root
const root = document.querySelector("#root");

// 2 is the number of space
// null is like the middleware
// need to run JSON.stirngify and output
root.innerHTML = `<pre>${JSON.stringify(output, null, 2)}</pre>`;



/*
// create img element
let img = document.createElement("img");
img.src = img_path; // assign src
img.style = "width: 100px; height: 100px"; // style
img.alt = "test img"; // alt

// append to doc body append child
// with img
document.body.appendChild(img);
*/
