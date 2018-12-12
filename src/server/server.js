const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('dist'));

passport.use(new GithubStrategy({
  clientID: "83a5b233428d02f2d578",
  clientSecret: "5d331119149fea550b624190c793a640808135f6",
  callbackURL: "http://localhost:8080/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

// Express and Passport Session
const session = require('express-session');
app.use(session({
  secret: "i love chess",
  // name: cookie_name,
  // store: sessionStore, // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  });

app.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/github'>GitHub</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

  // dump the user for debugging
  if (req.isAuthenticated()) {
    html += "<p>authenticated as user:</p>"
    html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
  }

  res.send(html);
});

app.get('/logout', function (req, res) {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

// Simple middleware to ensure user is authenticated.
// Use this middleware on any resource that needs to be protected.
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next();
  }

  // denied. redirect to login
  res.redirect('/')
}

app.get('/protected', ensureAuthenticated, function (req, res) {
  res.send("access granted. secure stuff happens here");
});

const server = app.listen(8080, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address, server.address().port);
});