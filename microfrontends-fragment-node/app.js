const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.use(express.static('dist'));
app.use(morgan('combined'));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next()
}) 
app.listen(port, host);

console.log(`Example app listning on ${port}!`);
