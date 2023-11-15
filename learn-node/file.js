const fs = require('fs');


// read file text 

const readText = fs.readFileSync("./texts/read.txt","utf-8")
console.log(readText)

// writing a text ----------
const writtenText = fs.writeFileSync("./texts/writeText.txt","this is my written text" + readText)