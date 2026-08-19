const express = require("express");
const petControllers = require("../controllers/pet-controllers");
const upload = require("../middlewares/multer-middleware");

const router = express.Router();

router.get("/", petControllers.getAllPets);
router.get("/:id", petControllers.getPetById);

router.post(
  "/",
  upload.single("image"),
  petControllers.createPet
);

router.patch(
  "/:id",
  upload.single("image"),
  petControllers.updatePet
);

router.delete("/:id", petControllers.deletePet);

module.exports = router;