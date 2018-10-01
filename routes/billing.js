const keys = require('../config/config');
const stripe = require('stripe')(keys.stripe.secretKey);
const requireLogin = require('../milddlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, (req, res) => {
    stripe.charges
      .create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id,
      })
      .then(charge => {
        req.user.credits += 5;
        req.user.save().then(user => {
          res.send(user);
        });
      });
  });
};
