const mongoose = require('mongoose');

let dbconf;

if (process.env.NODE_ENV === 'PRODUCTION') {
    dbconf = process.env.dbconf;
} else {
    const fs = require('fs');
    const path = require('path');
    const fn = path.join(__dirname, '../../config.json');

    const data = fs.readFileSync(fn);
    const conf = JSON.parse(data);

    dbconf = conf.dbconf;
}

mongoose.connect(dbconf, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected.");
    })
    .catch(err => {
        console.log("Error connceting to db", err);
    });
