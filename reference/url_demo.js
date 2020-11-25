const url = require("url");

const myUrl = new URL(
  "https://nodejs.org:8000/dist/latest-v14.x/docs/api/fs.html?name=sautet&id=36980551"
);

//Serialized URL
console.log(myUrl.href);
//host (root domain)
console.log(myUrl.host);
//Hostname (does not get the port)
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//params objects
console.log(myUrl.searchParams);
//add params
myUrl.searchParams.append("name", "sammy", "id", "1234534");
console.log(myUrl.searchParams);
//Loop through
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}:${value}`);
});
