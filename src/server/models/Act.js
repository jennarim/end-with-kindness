const mongoose = require('mongoose');
const { Schema } = mongoose;

const actSchema = Schema({
    content: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [1, 'Should be more than 1 character'],
        maxlength: [1000, 'Should be less than 1000 characters']
    },
    datePosted: {
        type: String,
        required: [true, '{PATH} is required.']
    },
    id: {
        type: Number,
        required: [true, '{PATH} is required.']
    }
});

mongoose.model('Act', actSchema);