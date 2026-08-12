const fs = require("fs");
const path = require("path");

function deleteUploadedFile(foldername, filename) {
    const filePath = path.join(
        __dirname,
        "..",
        "uploads",
        foldername,
        filename
    );

    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(`Error deleting image: ${err.message}`);
        }
    });
}

module.exports = deleteUploadedFile;
