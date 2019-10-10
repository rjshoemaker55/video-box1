const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  cbtlevel: {
    type: Number,
    default: 4
  },
  strlevel: {
    type: Number,
    default: 1
  },
  strxp: {
    type: Number,
    default: 0
  },
  deflevel: {
    type: Number,
    default: 1
  },
  defxp: {
    type: Number,
    default: 0
  },
  rnglevel: {
    type: Number,
    default: 1
  },
  rngxp: {
    type: Number,
    default: 0
  },
  mglevel: {
    type: Number,
    default: 1
  },
  mgxp: {
    type: Number,
    default: 0
  },
  hplevel: {
    type: Number,
    default: 10
  },
  hpxp: {
    type: Number,
    default: 0
  },
  inventory: [{
    itemName: String,
    quantity: Number
  }]
});

module.exports = User = mongoose.model('user', UserSchema);