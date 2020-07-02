require('./models/Act.js');

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

mongoose.connect("mongodb://localhost/cdok", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(DIST_DIR));

app.use('/', require('./routes/actsRoutes.js'));

/* 
    app.get('/api', (req2, res) => {
        res.json(mockResponse);
    });

    app.get('/api/acts', (req, res) => {
        const sampleResponse = {
            acts: [
                {
                    content: "(from app.js) Cleaned up the streets with the whole neighborhood! #clean",
                    url: "cleaned-up-the-streets",
                    date_posted: "Jan 24 2020",
                    id: 1
                },
                {
                    content: "(from app.js) I helped volunteer at an organization that helps prevent fraud that targets senior citizens. I even was able to be a host for one of the sessions.",
                    url: "helped-volunteer",
                    date_posted: "Jan 23 2020",
                    id: 2
                },
                {
                    content: "Found a stray cat alone in an alleyway, and brought her to the local animal shelter where she is recovering",
                    url: "found-stray-cat",
                    date_posted: "Jan 23 2020",
                    id: 3
                },
                {
                    content: "helped my mom with the groceries",
                    url: "helped-mom",
                    date_posted: "Jan 21 2020",
                    id: 4
                },
                {
                    content: "today I gave a #donation to a cause I really care about",
                    url: "gave-donation",
                    date_posted: "Jan 20 2020",
                    tags: "donation",
                    id: 5
                },
                {
                    content: "my friend bought me high quality polyester blankets, but because I already have a ton at home, I decided to donate them to my local homeless shelter. hoping there&apos;s someone out there who found good use of them!",
                    url: "donated-blankets",
                    date_posted: "Jan 20 2020",
                    id: 6
                },
                {
                    content: "caught my 7 year old son littering. I gave him a stern lecture, but instead of chastising him, I taught him the importance of recycling and cleaned up the street we live on together",
                    url: "son-littered",
                    date_posted: "Jan 20 2020",
                    id: 7
                }
            ]
        };
        res.json(sampleResponse);
    });
*/

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});