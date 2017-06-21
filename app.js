const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
const list = {data :[
  {name: "Learn Node Basics"},
  {name: "Learn Express Basics"},
  {name: "Learn Mustache"},
  {name: "Learn HTML forms with Express"},
  {name: "Learn about authentication"},
  {name: "Learn how to connect to PostgreSQL"},
  {name: "Learn how to create databases"},
  {name: "Learn SQL"},
  {name: "Learn how to connect to PostgreSQL from Node"},
  {name: "Learn how to use Sequelize"}
]}
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render("todo", {list: list.data});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
