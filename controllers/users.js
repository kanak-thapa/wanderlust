const User = require("../models/user.js");

module.exports.renderSignUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
    try {
        console.log("1");

        let { username, email, password } = req.body;

        const newUser = new User({
            email,
            username
        });

        console.log("Before register");

        const registeredUser = await User.register(newUser, password);

        console.log("After register");

        req.login(registeredUser, (err) => {
            console.log("Inside login");

            if (err) {
                console.log("LOGIN ERROR:", err);
                return res.redirect("/signup");
            }

            req.flash("success", "Welcome to wanderlust");
            res.redirect("/listings");
        });

    } catch (e) {
        console.log("🔥 ACTUAL ERROR:", e);
        console.log("🔥 MESSAGE:", e.message);
        console.log("🔥 STACK:", e.stack);

        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
  //console.log("get request")
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  req.flash("success", "you are logged in!!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.loginOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!!");
    res.redirect("/listings");
  });
};
