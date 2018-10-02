const express = require('express'),
  cookie = require('cookie-session'),
  bodyParser = require('body-parser'),
  exphbs = require('express-handlebars'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  flash = require('connect-flash'),
  session = require('express-session'),
  app = express(),
  port = 5000 || process.env.PORT,
  config = require('./config/config');

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

//+++++++++++++++++++++++++++++++
// +++++++++ MIDDLEWARES ++++++++
//+++++++++++++++++++++++++++++++

// View engines
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
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
// require('./routes/404')(app);

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
