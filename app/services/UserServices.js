/**
 * Created by everettrobinson on 2/10/17.
 */
var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserDocument(document_id) {
    return axios.get('http://localhost:3000/api/documents/' + document_id)
}

var helpers = {
    findUser: function(id, userData) {
        for (var i = 0; i < userData.length; i++ ) {
            if (userData[i]._id == id) return userData[i];
        }
    },

    getUserDocuments: function (user) {
        if (user.documents[0]) {
            return axios.all( user.documents.map(function (document) {
                return getUserDocument(document.oid)
            })).then((res) => {
                return res.map((document) => {
                    return document.data;
                });
            }).catch((err)=> {
                console.warn('Error in getUserDocuments', err)
            })
        }
       
    }
};

module.exports = helpers;