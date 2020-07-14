const mongoose = require('mongoose');
const { Schema } = mongoose;
const URLSlugs = require('mongoose-url-slugs');
const { MIN_LENGTH, MAX_LENGTH } = require('./../../lib/constants.js');

const actSchema = Schema({
    content: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [MIN_LENGTH, `Should be more than ${MIN_LENGTH} characters`],
        maxlength: [MAX_LENGTH, `Should be less than ${MAX_LENGTH} characters`]
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