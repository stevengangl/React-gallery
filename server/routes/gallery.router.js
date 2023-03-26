const { default: Axios } = require('axios');
const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE



// DELETE ROUTE

router.delete("/delete/:id", (req, res) => {
    let idToDelete = req.params.id;
    const sqlText = `DELETE FROM "gallery" WHERE id=$1;`;
  
    pool
      .query(sqlText, [idToDelete])
      .then((result) => {
        console.log("inside delete route:", idToDelete);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error updating likes:', error);
            res.sendStatus(500);
        });
}); // END PUT Route


// GET Route
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM gallery ORDER by id ASC; `;
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