const mongoose = require("mongoose");

const usersettingsSchema = mongoose.Schema({
  username: String,
  guildid: {type: String, default: '#kat0154'},
  xp: {type: Number, default: 0},
  totalxp: {type: Number, default: 0},
  level: {type: Number, default: 1},
  rep: {type: Number, default: 0},
  lastrep: {type: Number, default: 0}
});

module.exports = mongoose.model("usersettings", usersettingsSchema);