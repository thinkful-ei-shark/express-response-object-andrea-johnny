const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
const plays = require('./playstore.js')

app.get('/apps', (req, res) => {
    let returnData = [...plays]
    const {search} = req.query;
    returnData = returnData.filter(play => play.App.toLowerCase().includes(search.toLowerCase()));
    res
        .json(returnData);
});


module.exports = app;