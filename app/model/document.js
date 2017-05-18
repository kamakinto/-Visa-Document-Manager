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
    due_date: String,
    condition: String,
    comments: [{
        author_id: String,
        author_name: String,
        timestamp: String,
        comment: String,
        photo_url: String
    }]

});

module.exports = mongoose.model('Document', DocumentSchema);