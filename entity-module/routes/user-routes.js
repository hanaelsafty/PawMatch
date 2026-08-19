const express = require("express");

const userControllers = require("../controllers/user-controllers");

const authenticateMiddleware = require("../middlewares/authenticate-middleware");

const authorizeMiddleware = require("../middlewares/authorize-middleware");

const router = express.Router();

router
.route("/pets")
.get(
    authenticateMiddleware,
    authorizeMiddleware("user"),
    userControllers.getUserPets
  )
.post(
    authenticateMiddleware,
    authorizeMiddleware("user"),
    userControllers.addPetToUser
  );

module.exports = router;