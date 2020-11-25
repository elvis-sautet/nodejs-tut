const fs = require("fs");
const path = require("path");

//Create a folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
});

//create and write to  file and also update the file contents
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  (err) => {
    //file update
    if (err) throw err;
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " i definately love the throws in here at NodeJs",
      (err) => {
        if (err) throw err;
        console.log("File updated ...");
      }
    );
    console.log("File written to...");
  }
);
//Read a file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("Reading file...");
  console.log(data);
});
//Rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "trial.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
