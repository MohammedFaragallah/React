const express = require('express'),
  cookie = require('cookie-session'),
  passport = require('passport'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 5000 || process.env.PORT,
  mongoose = require('mongoose'),
  config = require('./config/config');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(
  config.database.link,
  { useNewUrlParser: true }
);

app.set('view engine', 'ejs');
//+++++++++++++++++++++++++++++++
// +++++++++ MIDDLEWARES ++++++++
//+++++++++++++++++++++++++++++++
app.use(bodyParser.json());
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
require('./routes/billing')(app);
require('./routes/survey')(app);
// require('./routes/404')(app);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
