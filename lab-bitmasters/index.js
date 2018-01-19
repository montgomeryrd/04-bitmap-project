'use strict';

const fs = require('fs');
const Bmp = require('./lib/bitmap');

const retrieve = module.exports = {};

fs.readFile('./test/asset/bitmap.bmp', (err, data) => {
    let bmp = new Bmp(data);
});