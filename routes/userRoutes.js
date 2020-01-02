const express = require('express');
const router = express.Router();
const userController = require("../controllers/UsersController")

// @GET
// Return one user data.
router.get("/login", userController.getUser);
// @POST
// Add new user.
router.post("/sign-up", userController.addUser);
// @PUT
// Add movie to watch list.
router.put(`movie-to-watch-list/`, userController.addMovieToWatchList);
// @DELETE
// Remove movie from watch list.
router.delete(`remove-movie-from-watch-list/:userID/:movieID`, userController.deleteMovieFromWatchList);
// @PUT
// Add movie to watched list.
router.put(`movie-to-watched-list/`, userController.addMovieToWatchedList);
// @DELETE
// Remove movie from watched list.
router.delete(`remove-movie-from-watched-list/:userID/:movieID`, userController.deleteMovieFromWatchedList);
// @PUT
// Add TvShow to watch list.
router.put(`show-to-watch-list/`, userController.addShowToWatchList);
// @DELETE
// Remove TvShow from watch list.
router.delete(`remove-show-from-watch-list/:userID/:showID`, userController.deleteShowFromWatchList);
// @PUT
// Add TvShow to watched list.
router.put(`show-to-watched-list/`, userController.getMovieOnSearch);
// @DELETE
// Remove TvShow from watched list.
router.delete(`remove-show-from-watched-list/:userID/:showID`, userController.deleteShowFromWatchedList);