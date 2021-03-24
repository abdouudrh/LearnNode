const fs = require('fs');
/* console.log(`process.arg[2]: ${process.argv[2]}`) */


fs.readFile(process.argv[2],(err, data) => {
    if (err){
        console.log(err) 
    } console.log(data.toString().split("\n").length-1)
})



