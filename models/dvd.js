

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var dvdSchema  = new schema({
  title: String
});

mongoose.model('dvds', dvdSchema);

