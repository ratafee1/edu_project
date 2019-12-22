// const express = require('express')

import express from 'express'
// import {foo,f,num} from './config.js'
import * as config from './config.js'
const app = express()
console.log(config.f)
//加载export default中的成员
import a from './config'
console.log(a)
// console.log(foo)
// console.log(num)
// app.set('views',)
// app.get('/', (req,res)=>{
//     // res.end('hello world')
// })

// app.listen(3000,()=>{
//     console.log('server is running at port 3000...')
// })


import f from './config'
import {foo} from './config'
import * as all from './config'

console.log(`default:${f},foo:${foo},all:${all}`)