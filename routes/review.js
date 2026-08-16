const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require('../models/listings');
const {validateReview, isLoggenIn, isReviewAuthor} = require("../middleware.js")
const reviewControllers = require("../controllers/reviews.js");


//Post review route
router.post(
    "/",
    isLoggenIn,
    validateReview, 
    wrapAsync(reviewControllers.addReview));

//Delete review post
router.delete(
    "/:reviewId", 
    (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.session.redirectUrl = `/listings/${req.params.id}`;
            req.flash("error", "You must be logged in to delete a review.");
            return res.redirect("/login");
        }
        next();
    },
    isReviewAuthor,
    wrapAsync(reviewControllers.deleteReview)
);
module.exports=router;