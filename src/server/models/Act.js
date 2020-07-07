const mongoose = require('mongoose');
const { Schema } = mongoose;
const URLSlugs = require('mongoose-url-slugs');

const actSchema = Schema({
    content: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [1, 'Should be more than 1 character'],
        maxlength: [1000, 'Should be less than 1000 characters']
    },
    datePosted: {
        type: Date,
        required: [true, '{PATH} is required.']
    },
    id: {
        type: Number,
        required: [true, '{PATH} is required.']
    }
});

actSchema.plugin(URLSlugs('content', { maxLength: 50 }));

mongoose.model('Act', actSchema);