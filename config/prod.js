module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  cookie: {
    keys: process.env.COOKIE_KEYS,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
  database: {
    link: process.env.DATABASE_URI,
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};
