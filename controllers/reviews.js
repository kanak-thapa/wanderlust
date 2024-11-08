const Listing = require("../models/listings.js");
const Review = require("../models/review.js");

module.exports.addReview = async(req, res, next)=>{
    let listing = await Listing.findById(req.params.id) ;
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    //console.log(newReview);

    listing.reviews.push(newReview);
   
    await newReview.save();
    await listing.save();

    //console.log("new reviews saved");
    req.flash("success", "New review created");
    res.redirect(`/listings/${listing.id}`);
}

module.exports.deleteReview = async(req, res)=>{
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);//why this
    req.flash("success", "review deleted");
    res.redirect(`/listings/${id}`);
}