'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config.js');

var config = _interopRequireWildcard(_config);

var _config2 = require('./config');

var all = _interopRequireWildcard(_config2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express')

var app = (0, _express2.default)();
// import {foo,f,num} from './config.js'

console.log(config.f);
//加载export default中的成员

console.log(all.default);
// console.log(foo)
// console.log(num)
// app.set('views',)
// app.get('/', (req,res)=>{
//     // res.end('hello world')
// })

// app.listen(3000,()=>{
//     console.log('server is running at port 3000...')
// })


console.log('default:' + all.default + ',foo:' + _config2.foo + ',all:' + all);