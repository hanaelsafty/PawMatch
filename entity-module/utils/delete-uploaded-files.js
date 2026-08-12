const fs = require("fs");
const path = require("path");

function deleteUploadedFile(foldername, filename) {
    const filePath = path.join(__dirname, "..", "uploads", filename);

    fs.unlink(filePath).catch((err) => {
            console.log(`Error deleting image: ${err.message}`);
    });
}

module.exports = deleteUploadedFile;
