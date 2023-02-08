import multer from 'multer';
import fs from 'fs'
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const path = 'uploads/';
      fs.mkdirSync(path, { recursive: true });
      cb(null, path)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
  })
  const upload = multer({ storage: storage }).single('profile_image');

export default upload;
