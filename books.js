// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book schema 
const Book = require('../Model/Book')

// @route GET api/books
// @description Get all books
router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: `No Books found, Error is: ${err}` }));
});

// @route POST api/books
// @description add/save book
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: `No Books found, Error is: ${err}` }));
});

// @route PUT api/books/:id
// @description Update book, find the book by ID in mongoDB database using findByIdAndUpdate() function, get id from the param for UI interface. 
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: `Unable to update the Database, Error is: ${err}` })
    );
});

module.exports = router;