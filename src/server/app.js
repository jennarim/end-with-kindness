require('./models/Act.js');
require('./db.js');

const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(DIST_DIR));

app.use('/', require('./routes/actsRoutes.js'));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE, (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});