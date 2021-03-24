const filtered = require('./mymodule')


const dirname = process.argv[2]
const ext = process.argv[3]

filtered(dirname, ext, (err,files)=>{
    
   files.forEach(file => console.log(file))

})

