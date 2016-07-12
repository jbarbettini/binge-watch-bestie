var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  type: String,
  id: Number
});

module.exports = mongoose.model('List', ListSchema);