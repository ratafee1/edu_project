'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express')

var app = (0, _express2.default)();
app.use('/node_modules', _express2.default.static(_config2.default.node_modules_path));
app.use('/public', _express2.default.static(_config2.default.public_path));
app.set('views', _config2.default.viepath);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    // res.end('hello world')
    res.render('index');
});

app.listen(3000, function () {
    console.log('server is running at port 3000...');
});