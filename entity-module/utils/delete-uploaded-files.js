const fs = require("fs");
const path = require("path");

function deleteUploadedFile(filename) {
    if (!filename) return;

    const filePath = path.join(__dirname, "..", "uploads", filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.log("Error deleting image:", err.message);
            return;
        }

        console.log("Image deleted successfully");
    });
}

module.exports = deleteUploadedFile;