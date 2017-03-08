/**
 * Created by everettrobinson on 2/13/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    dob:Date,
    phone_number: String,
    visa_type:String,
    appointment_date: Date,
    documents: [{oid:String}]

});


module.exports = mongoose.model('User', UserSchema);