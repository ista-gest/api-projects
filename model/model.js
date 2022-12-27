const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    noteJ1: {
        required: false,
        type: Number
    },
    noteJ2: {
        required: false,
        type: Number
    },
    noteJ3: {
        required: false,
        type: Number
    },
    noteJ4: {
        required: false,
        type: Number
    },
    total: {
        required: false,
        type: Number
    }
   
})

module.exports = mongoose.model('projects', dataSchema)