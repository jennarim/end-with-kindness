const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const Act = mongoose.model('Act');

const router = express.Router();

router.get('/api/acts', (req, res) => {
    Act.find({}, (err, acts) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Sending', acts);
            res.json(acts);
        }
    });
});

router.post('/act', async (req, res) => {
    console.log("got a post request, body:", req.body);
    const nextID = await Act.countDocuments({}) + 1;
    const newAct = new Act({
        content: req.body.content,
        datePosted: moment().format('MMM Do YYYY hA'),
        id: nextID
    });
    newAct.save((err, act) => {
        if (err) {
            res.send(err);
        } else {
            res.send(act);
        }
    });
});

module.exports = router;