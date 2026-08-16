const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listings");
const Review = require("./models/review.js");

module.exports.isLoggenIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log(req.originalUrl);
    console.log(req.session.redirectUrl);

    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create listing!!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "you are not the owner of this listings");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  //middleware
  let { error } = listingSchema.validate(req.body); //yehh joi se aya he validate karne ke liye
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    //console.log(errMsg);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    //same here joi se ayega
    let errMsg = error.details.map((el) => el.message).join(",");
    console.log(errMsg);
    throw new ExpressError(400, errMsg);
  } 
  else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You did not created this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
