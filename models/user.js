const mongoose = require('mongoose'),
  passportLocal = require('passport-local-mongoose'),
  { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  googleID: String,
  credits: { type: Number, default: 0 },
});

userSchema.plugin(passportLocal);
module.exports = mongoose.model('user', userSchema);
