var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema- the structure of the db
var clientSchema = new Schema({
  name:String
//  info_text:String,
//   adress: String,
//   adresslink:String,
// instgram:String,
// whatsapp:String
});

//we work with the model to save as collection
var Client = mongoose.model('Client', clientSchema);

module.exports= Client
