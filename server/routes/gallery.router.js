const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in on click');
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM gallery`;
    pool.query(sqlText)
        .then((result) => {
            console.log('in get trying to talk to database', result.data)
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500)
        })

}); // END GET Route

module.exports = router;