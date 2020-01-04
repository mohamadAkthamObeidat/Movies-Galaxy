const express = require('express');
const router = express.Router();
const authController = require("../controllers/AuthController")

// @GET
// Return home page.
router.get('/', authController.homePage);
// @GET
// Return one user data.
router.get("/login", authController.login);
// @POST
// Add new user.
router.post("/sign-up", authController.signUp);
// @POST
// Logout.
router.post("/logout", authController.logout)

module.exports = router;