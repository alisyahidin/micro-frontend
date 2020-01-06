const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const host = '0.0.0.0';

app.use(express.static('dist'));
app.use(morgan('combined'));
app.use(cors());
app.listen(port, host);

console.log(`Example app listning on ${port}!`);
