const express = require('express')
const books = express.Router()
const Book = require('../models/book')

// SEED

// INDEX
books.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.status(200).json(foundBooks)
    })
    .catch(err => {
        res.status(400).json({
            message: 'An error has occurred, could not get books'
        })
    })
})

// SHOW
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(foundBook => {
        res.status(200).json(foundBook)
    })
    .catch(err => {
        res.status(400).json({
            message: 'An error has occurred, could not find the book'
        })
    })
})

// CREATE
books.post('/', (req, res) => {
    Book.create(req.body)
    .then(createdBook => {
        res.status(200).json(createdBook)
    })
    .catch(err => {
        res.status(400).json({
            message: 'An error has occurred, could not create the book'
        })
    })
})

// UPDATE
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedBook => {
        console.log(req.body)
        res.status(200).json(updatedBook)
    })
    .catch(err => {
        res.status(400).json({
            message: 'An error has occurred, could not edit the book'
        })
    })
})

// DELETE
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(deletedBook => {
        res.status(200).json({
            message: 'Delete Successful'
        })
        .catch(err => {
            res.status(400).json({
                message: 'An error has occurred, could not delete the book'
            })
        })
    })
})

// EXPORT
module.exports = books