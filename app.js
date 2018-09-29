const express = require('express'),
  cookie = require('cookie-session'),
  passport = require('passport'),
  app = express(),
  port = 5000 || process.env.PORT,
  mongoose = require('mongoose'),
  config = require('./config/config');

require('./models/user');
require('./services/passport');

mongoose.connect(
  config.database.link,
  { useNewUrlParser: true }
);

app.set('view engine', 'ejs');
//+++++++++++++++++++++++++++++++
// +++++++++ MIDDLEWARES ++++++++
//+++++++++++++++++++++++++++++++
app.use(
  cookie({
    maxAge: config.cookie.maxAge,
    keys: config.cookie.keys,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

require('./routes/auth')(app);
require('./routes/404')(app);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
