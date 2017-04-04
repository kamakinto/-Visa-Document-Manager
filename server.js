/**
 * Created by everettrobinson on 2/11/17.
 */
 //BASE SETUP
// ===============================================================================


// call the packages we need
var express = require('express'); //call express
var app = express();  //define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 3000; // set out port which will be listened to by server.js
var MONGO_URI = "mongodb://localhost:27017/visaDocuments"



mongoose.connect(MONGO_URI, function(err, db) { //Connect to database
    if(err) {
        console.log('mongodb is unresponsive');
        process.exit(1);
    } else {

// START THE SERVER
// ===============================================================================
        app.use(cors());

        //Initialize the app.
        var server = app.listen(3000, function () {
            var port = server.address().port;
            console.log('successful database connection');
            console.log("App now running on port", port);
        });
    }
});

//Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

var User = require('./app/model/user');
var Document = require('./app/model/document');
//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


//ROUTES FOR OUR API
// ===============================================================================

var router = express.Router();   //get an instance of the express Router

//MIDDLEWARE FOR ALL REQUESTS
// ===============================================================================
router.use(function(req, res, next) {
    //do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


//TODO: Add middleware for security
//TODO: Add middleware for authentication



//test route to make sure everything is working (accessed at GET http://localhost:3000/api
router.get('/', function(req, res) {
    res.json({message: 'Server is up and running api' });
});

/**
 * API Routes for Users
 */


    //create a user (accessed at POST http://localhost:3000/api/users)
    router.post('/users', function(req, res) {
        var user = new User();  // create a new instance of the User model
        user.name = req.body.name; // set the users name (comes from the request)

        // save the user and check for errors
        user.save(function(err) {
            if (err) {
                res.set(err);
            }
            res.json({message: 'User created!'});
        });

    });

    router.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err){
                res.send(err);
            } else {
                res.json(users);
            }
        })
    });

router.put('/users/:user_id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err){
            res.send(err);
        } else {
            user.name = req.body.name; //update the user info

            user.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({message: 'the user was updated'});
                }
            });
            res.json(user);
        }
    })
});

router.delete('/users/:user_id', function(req, res) {
   User.remove({
       _id: req.params.user_id
   }, function(err, user) {
       if (err){
           res.send(err);
       } else {
           res.json({message: "Successfully deleted"})
       }
   });
});

/**
 * API Routes for Documents
 */

router.post('/documents', function(req, res) {
    var document = new Document();
    document.uuid = req.body.uuid; //set the uuid, should come from the oid of the user associated w/ the doc.
    document.name = req.body.name;
    document.status = req.body.doc_status;
    document.due_date = req.body.date;
    document.condition =  req.body.condition;
    document.comments = req.body.comments;

    document.save(function(err) {
        if (err) {
            res.set('document was not created:', err);
        }
        res.json({message: 'Document created'})
    })
});

router.get('/documents', function(req, res) {
    Document.find(function(err, documents) {
        if (err) {
            res.send('Could not fetch the documents', err);
        } else {
            res.json(documents);
        }
    })
});

router.get('/documents/:document_id', function(req, res) {
    Document.findOne({'uuid': req.params.document_id}, function (err, document) {
        if(err) {
            res.send('Could not fetch document with id ' + req.params.document_id + ': '
            , err);
        } else {
            res.json(document);
        }
    })
});

router.put('/documents/:document_id', function(req, res) {
    // update document. put a switch statement to allow for a specific type of update
    Document.findOne({'uuid': req.params.document_id}, function (err, document) {
        if(err) {
            res.send('Could not update the document with id ' + req.params.document_id + ':'
            , err);
        } else {
            console.log("contents of the request body", req.body);
            document.name = req.body.name;
            document.status = req.body.status;
            document.due_date = req.body.due_date;
            document.condition =  req.body.condition;
            //add logic for appending comments
            document.comments === ''
                ? document.comments = req.body.comments
                : document.comments = document.comments + req.body.comments ;

            //Save the Document
            document.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'document has been updated'});
            });
        }
    })
});

router.delete('/documents/:document_id', function(req, res) {
    User.remove({
        _id: req.params.document_id
    }, function(err, document) {
        if (err){a
            res.send('Could not delete the document with id: ' + req.params.document_id, err);
        } else {
            res.json({message: "Successfully deleted document with id: " + req.params.document_id})
        }
    });
});

//REGISTER OUR ROUTES --------------------------------
//all of our routes will be prefixed with /api
app.use('/api', router);



