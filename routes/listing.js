const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
//const {listingSchema, reviewSchema} = require("../schema.js");
//const ExpressError = require("../utils/ExpressError.js");
//const Listing = require('../models/listings');
const {isLoggenIn, isOwner, validateListing} = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer  = require('multer');//help in parsing form data
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});//it will take out the file and store it in uploads


router
.route("/")
.get(wrapAsync(listingControllers.index))
.post(
    isLoggenIn, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingControllers.createListing)),

// .post( (req, res)=>{//kis field se file nikal rahe he
//     res.send(req.file);
// })
//new route 
router.get("/new", isLoggenIn, listingControllers.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingControllers.showListing))
.put(
    isLoggenIn, 
    isOwner, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingControllers.updateListings))
.delete(isLoggenIn, isOwner, listingControllers.deleteListings)


//EDIT Route
router.get("/:id/edit", isLoggenIn, isOwner, wrapAsync(listingControllers.renderEditForm));


module.exports=router; 



//index route
//router.get("/", wrapAsync(listingControllers.index));

//create routes
//router.post("/", validateListing, isLoggenIn, wrapAsync(listingControllers.createListing));

//update
//router.put("/:id", validateListing, isLoggenIn, isOwner, wrapAsync(listingControllers.updateListings));

//delete
//router.delete("/:id", isLoggenIn, isOwner, listingControllers.deleteListings);

//show route 
//router.get("/:id", wrapAsync(listingControllers.showListing));

