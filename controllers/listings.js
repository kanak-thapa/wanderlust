const Listing = require('../models/listings');

module.exports.index = async(req, res)=>{
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("./listings/index.ejs", {allListings});
}

module.exports.renderNewForm = (req, res)=>{
    res.render("./listings/new.ejs");
}

module.exports.showListing = async(req, res, next)=>{
    let {id} = req.params;
    let listing =  await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate:{         
        path: "author"
    }, 
})
    .populate("owner"); 
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs", {listing});
}

module.exports.createListing = async(req, res, next)=>{
    // let result = listingSchema.validate(req.body);
    // console.log(result);
    // if(result.error){
    //     throw new ExpressError(400, result.error)
    // }
    let url = req.file.path;
    let filename = req.file.filename;
    //console.log(url, "..", filename);
    const newListing = new Listing(req.body.listing);
    newListing.image={url, filename};
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created");
    res.redirect("/listings"); 
}

module.exports.renderEditForm = async(req, res, next)=>{
    let {id} = req.params;
    let listing =  await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not existed!!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl.replace("/upload","/upload/h_300/w_250")
    res.render("./listings/edit.ejs", {listing});
}

module.exports.updateListings = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename}
        await listing.save();
    }
    req.flash("success", "listing updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListings = async(req, res, next)=>{
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
}