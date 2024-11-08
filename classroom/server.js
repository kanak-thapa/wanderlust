const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized:  true,
}));
app.use(flash());

app.use((req, res, next)=>{
    res.locals.errorMsg = req.flash("error");
    res.locals.successMsg = req.flash("success");//we use this if we want to use this in a templet
    next();
})

app.get("/register", (req, res)=>{
    let {name="anonymous"} = req.query;
    //?name=akshat
    req.session.name = name;
    //console.log(req.session.name);
    if(name === "anonymous"){
        req.flash('error', 'user not registered!!')//to show it we use views
    }
    else{
        req.flash('success', 'user registered successfully!!')//to show it we use views
    }
    res.redirect("/hello");
})

app.get("/hello", (req, res)=>{
    //res.render("page.ejs", {name: req.session.name, msg: req.flash('success')})
    res.render("page.ejs", {name: req.session.name});
})

app.get("/test", (req, res)=>{
    req.send("test successful!!");
})

app.get("/reqcount", (req, res)=>{
    if (req.session.count){
        req.session.count++;//temp storage
    }else{
        req.session.count=1;
    }
    res.send(`you send the req ${req.session.count} times`);
})

app.listen(3000, ()=>{
    console.log("server is listening to 3000");
})



































//const cookieParser = require('cookie-parser');
/**
 * different types of result when we try to disturb cookies
[Object: null prototype] {}
[Object: null prototype] { color: 'red' }
[Object: null prototype] { color: false }
 */

//app.use(cookieParser("secretcode"));
// app.use("/users", users);
// app.use("/posts", posts)

// app.get("/setcookies", (req, res)=>{-
//     res.cookie("greet", "namaste");
//     res.cookie("origin", "India");
//     res.send("we sent you a cookie");
// });

// app.get("/getcookies", (req, res)=>{
//     let {name="anonymous"} = req.cookies;
//     console.log(req.cookies);
//     res.send(`Hi ${name}`);
// })

// app.get("/getsignedcookie", (req, res)=>{
//     res.cookie("color", "red", {signed: true});
//     res.send("done!");
// })

// app.get("/verify", (req, res)=>{
//     res.send("verify!!")
//     console.log(req.signedCookies);

// })