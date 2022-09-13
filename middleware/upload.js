const multer = require('multer')


function image (){

    const storage = multer.diskStorage({
        destination: './public/images',
        filename: function(_req, file, cb){
            var ext = file.originalname.slice(file.originalname.lastIndexOf('.'))
            cb(null, Date.now() + ext )
        }
    })

    const upload = multer({storage: storage}).single('file')

    return upload

}





module.exports = {image}



