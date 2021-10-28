// const express = require('express');
import React from 'react';

import express from 'express';

//allow load up index.html
import {readFileSync} from 'fs';
import {renderToString} from 'react-dom/server'


import { App } from '../client/App';

// reactdom render will confuse server
const app = new express();

//serve client.js file
app.use(express.static("dist"));

// _req underscore means not using it, but no other way to get response argument without it
app.get('/', async (_req, res) => {
    const index = readFileSync(`public/index.html`, 'utf8');
    const rendered = renderToString(<App />)
    res.send(index.replace("{{rendered}}", rendered))
    // res.send(
    //     `<h1> REACT IS EXCELLENT </h1>`
    // )
})

app.listen(7777);
console.log("server is listening")