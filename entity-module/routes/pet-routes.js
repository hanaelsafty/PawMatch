const express = require("express");
const petController = require("../controllers/pet-controllers");
const upload = require("../middlewares/multer-middleware");

const router = express.Router();

router
.route("/")
.get (petControllers.getAllPets)
.post (upload. single("image"), petControllers.createPet)
router
.route("/:id")
.get(petControllers.getPetById)
.patch(upload. single("image"), petControllers.updatePet)
.delete(petControllers.deletePet);

module.exports = router;