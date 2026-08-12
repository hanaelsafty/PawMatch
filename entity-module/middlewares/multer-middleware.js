const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dest = "uploads/";

        if (req.baseUrl.includes("pet")) {
            dest = "uploads/pets/";
        } else if (req.baseUrl.includes("users")) {
            dest = "uploads/users/";
        }

        try {
            fs.mkdirSync(dest, { recursive: true });
            cb(null, dest);
        } catch (err) {
            cb(err, null);
        }
    },

    filename: function (req, file, cb) {
        const extension = file.mimetype.split("/")[1];

        cb(null, Date.now() + "." + extension);
    }
});

const filefilter = (req, file, cb) => {
    const filetype = file.mimetype.split("/")[0];

    if (filetype === "image") {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: filefilter
});

module.exports = upload;