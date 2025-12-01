const express = require("express");
const app = express();
const router = express.Router({mergeParams: true});
const Listing = require("../models/listings");
const wrapAsync = require("../utils/wrapAsync.js");
//const {listingSchema, reviewSchema} = require("../schema.js");
//const ExpressError = require("../utils/ExpressError.js");
//const Listing = require('../models/listings');
const {isLoggenIn, isOwner, validateListing} = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer  = require('multer');//help in parsing form data
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});//it will take out the file and store it in uploads

 // <- ensure correct path/name
// other imports...



router.get("/", wrapAsync(async (req, res) => {
  const q = (req.query.q || "").trim();
  console.log("[/listings] search query:", q);

  let filter = {};
  if (q) {
    // search by country (case-insensitive) — change field name if your schema uses 'location' or 'countryName'
    filter = { country: { $regex: q, $options: "i" } };
  }

  // If listings large, consider limit/skip/pagination
  const listings = await Listing.find(filter);
  console.log("[/listings] found:", listings.length);
  res.render("listings/index.ejs", { listings, q });
}));

router
.route("/")
.post(
    isLoggenIn, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingControllers.createListing)),
// Index / list + search


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

