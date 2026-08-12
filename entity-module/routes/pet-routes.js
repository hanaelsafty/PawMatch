const express = require("express");
const upload = require("../middlewares/multer-middleware");

const {
    getAllPets,
    createPet,
    getPetById,
    updatePet,
    deletePet
} = require("../controllers/pet-controllers");

const router = express.Router();

router.post("/", upload.single("image"), createPet);

router.get("/", getAllPets);

router.get("/:id", getPetById);

router.patch("/:id", upload.single("image"), updatePet);

router.delete("/:id", deletePet);

module.exports = router;