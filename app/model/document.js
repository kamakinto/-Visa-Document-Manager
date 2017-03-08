/**
 * Created by everettrobinson on 3/7/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DocumentSchema = new Schema({
    id: String,
    uuid: String,
    name: String,
    status: String,
    due_date: Date,
    condition: String,
    comments: String

});

module.exports = mongoose.model('Document', DocumentSchema);