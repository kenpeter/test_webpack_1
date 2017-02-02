import { groupBy } from "lodash/collection";
import people from "./people";
import img_path from "./code.png";

let output = groupBy(people, "manager");


// accept module reload, if dev
// in production, module.hot === false
if(module.hot) {
  // https://webpack.github.io/docs/hot-module-replacement.html
  module.hot.accept();
}

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


const routes = {
  // need to a func
  dashboard: () => {
    // no System.require
    // it is System.import
    System.import("./dashboard").then((dashboard) => {
      dashboard.draw();
    }).catch((err) => {
      console.log(err);
    });
  }
} 

// run
setTimeout(routes.dashboard, 1000);
