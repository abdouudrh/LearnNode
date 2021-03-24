const fs = require('fs');
/* console.log(`process.arg[2]: ${process.argv[2]}`) */


const buf = fs.readFileSync(process.argv[2])

const str = buf.toString().split("\n")
console.log(str.length - 1)