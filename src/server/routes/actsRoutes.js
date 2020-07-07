const express = require('express');
const mongoose = require('mongoose');
const Filter = require('bad-words'),
    filter = new Filter();

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

router.get('/api/acts/:slug', (req, res) => {
    Act.findOne({ slug: req.params.slug }, (err, act) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Sending', act);
            res.json(act);
        }
    });
});

router.post('/act', async (req, res) => {
    console.log("got a post request, body:", req.body);
    const nextID = await Act.countDocuments({}) + 1;
    const newAct = new Act({
        content: filter.clean(req.body.content),
        datePosted: new Date(),
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