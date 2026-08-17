const express = require("express");
const authControllers = require("../controllers/auth-controllers");
const upload = require("../middlewares/multer-middleware");
 
const router = express.Router();
 
 
router.post("/signup", upload.single("imageUrl"), authControllers.signup );
router.post("/signin", authControllers.signin );
 
 
 
module.exports = router;