// const express = require('express')

import express from 'express'
import config from './config'

const app = express()
app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))
app.set('views', config.viepath)
app.set('view engine','ejs')
app.get('/', (req,res)=>{
    // res.end('hello world')
    res.render('index')
})

app.listen(3000,()=>{
    console.log('server is running at port 3000...')
})

