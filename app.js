const express = require('express');
const cookie = require('cookie-session');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const passport = require('passport');
// const localStrategy = require('passport-local');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 5000 || process.env.PORT;
const config = require('./config/config');

require('./models/User');
require('./models/Survey');
require('./models/Idea');
require('./services/passport');

mongoose
  .connect(
    config.database.link,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected To MongoDB'))
  .catch(err => console.log(err));

// +++++++++++++++++++++++++++++++
// +++++++++ MIDDLEWARES ++++++++
// +++++++++++++++++++++++++++++++
app.use(express.static(__dirname + 'public'));

// View engines
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'ejs');
app.set('view engine', 'handlebars');
// Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookie({
    maxAge: config.cookie.maxAge,
    keys: config.cookie.keys,
  })
);
// Method override
app.use(methodOverride('_method'));
// Passport
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new localStrategy(user.authenticate()));
// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());
// Session
app.use(
  session({
    secret: 'bewaresomthingveryambiguousandmysterious',
    resave: true,
    saveUninitialized: true,
  })
);
// Flash
app.use(flash());
// Globals fro flash
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
require('./routes/vidJot')(app);
require('./routes/auth')(app);
require('./routes/billing')(app);
require('./routes/survey')(app);
require('./routes/camp')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
