'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('fff');
};

// exports.foo = 'foo'
// exports.f = function name(params) {

// }
// exports.num = 10

// export const foo = 'bar'
// export const f = function name(params) {

// }
// export const num = 10


var foo = 'bar';
var f = function name(params) {};
var num = exports.num = 10;

exports.foo = foo;
exports.f = f;
//  相当于 module.exports=function(){}