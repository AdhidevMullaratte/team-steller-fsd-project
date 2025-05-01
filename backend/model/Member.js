// models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true },
  degree:  String, 
  project: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aboutAim: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
