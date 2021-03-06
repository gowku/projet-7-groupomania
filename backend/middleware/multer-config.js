import multer from "multer";

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "images/gif": "gif",
  "image/png": "png",
};

const storagePost = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `./images/postPic`);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});
const storageProfil = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `./images/profilPic`);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

const MulterPost = multer({ storage: storagePost }).single("file");
const MulterProfil = multer({ storage: storageProfil }).single("file");

export { MulterPost, MulterProfil };
