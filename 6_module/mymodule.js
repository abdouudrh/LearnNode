const fs = require ('fs')
const path = require ('path')

module.exports = (directory,extension, callback)=>{
    fs.readdir(directory,(err,list)=>{
        if (err){
            return callback(err,null)
        }
        list = list.filter(file => path.extname(file)=== `.${extension}`)
        return callback(null,list)
    })
}

