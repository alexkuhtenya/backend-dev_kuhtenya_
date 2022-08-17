const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb ( null , 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + ".jpg")
    }
})

module.exports = multer({storage :storage })