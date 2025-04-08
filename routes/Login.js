var express = require('express');
var router = express.Router();

// POST route to check username
router.post('/', function(req, res) {
  const username = req.body.username;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  const isValid = /^[a-z]+$/.test(username); // Only lowercase a-z

  if (isValid) {
    res.json({ message: "Valid Username" });
  } else {
    res.json({ message: "Invalid Username" });
  }
});

module.exports = router;
