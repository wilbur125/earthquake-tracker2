require('dotenv').config();

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.get('/api', (req, res) => {
    res.send('Got a GET request at /api ')
  })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})