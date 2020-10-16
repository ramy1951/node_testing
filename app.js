const express = require('express');
const morgan = require('morgan');

const app = express()

const router = require('./routers/router');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs:  5000,
    max: 10,
    message: "Too many requests, slow down!"
});

/**
 * middle wares for all routes.
 */
// router.use(limiter);
app.use(limiter)
app.use(morgan("tiny"))


/**
 * Routes
 */
app.use('/1', router)

app.get('/', (req, res, next) => {
    return res.send("Hello!");
});

app.get('/testing123', (req, res, next) => {
    return res.send("123");
});

app.listen(process.env.PORT, () => {
    console.log("Listening on localhost:" + process.env.PORT)
});