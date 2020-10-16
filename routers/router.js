const express = require('express');
const router = express.Router()

router.get('/router', (req, res, next) => {
    return res.send("123");
})

module.exports = router