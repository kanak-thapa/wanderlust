const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {listingSchema, reviewSchema} = require("../schema.js");
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
    isLoggenIn,
    isReviewAuthor,
    wrapAsync(reviewControllers.deleteReview)
);

module.exports=router;