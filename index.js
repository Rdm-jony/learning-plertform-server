const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())

const categories = require('./data/categories.json');
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses/categories', (req, res) => {
  res.send(categories)
})

app.get('/courses/categories/:id', (req, res) => {
  const _id=req.params.id;
  const selected=courseDetails.find(courseDetail=>courseDetail.id===_id);
  res.send(selected)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})