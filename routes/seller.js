const express = require('express');
const router = express.Router();
const hawkerSchema=require("../models/NewHawker.js")

router.post('/', (req, res) => {
  hawkerSchema.create(req.body)
    .then(newHawker => {
      console.log(newHawker);
      res.json(newHawker);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

module.exports = router;
