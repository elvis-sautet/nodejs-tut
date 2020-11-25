const { parse } = require("path");
const path = require("path");

//basename
console.log(path.basename(__filename));
//directoryname
console.log(path.dirname(__filename));
//fileextension
console.log(path.extname(__filename));
//create path object and we can access any property from it.
console.log(path.parse(__filename));
//accessing its properties of the path.parse => {
// base -> basefile name
//root -> root name
// dir ->directory_name
//name - >name of the file
//ext->extension
//}
console.log(path.parse(__filename).base);
//creating a path string from an object (its the opposite of the pat.parse of the filename)
console.log(
  path.format({
    root: "C:\\",
    dir: "C:\\Users\\25476\\Documents\\nodejs-tut\\reference",
    base: "path_demo.js",
    ext: ".js",
    name: "path_demo",
  })
);
//Concatnate paths
console.log(path.join(__dirname, "test", "hello.html"));
