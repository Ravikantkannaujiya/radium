const express = require('express');
const router = express.Router();
// const createAuthor= require("../models/myAuthorModel")

const AuthorController= require("../controllers/myAuthorController")
const BookController= require("../controllers/bookController")
const PublisherController= require("../controllers/publisherController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createAuthor',  AuthorController.createAuthor );
router.post('/bookCreate', BookController.bookCreate  );
router.get('/getBooks', BookController.getBooks  );
router.post('/createPublisher', PublisherController.createPublisher  );
router.post('/publisherBook', PublisherController.publisherBook );
router.get('/getPublisherBook', PublisherController.getPublisherBook );



module.exports = router;