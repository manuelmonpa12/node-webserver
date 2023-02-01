require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('home',{
    name:'Manuel Montero',
    title:'CUrso node'
  })
});

app.get("/generic", (req, res) => {
  res.render('generic',{
    name:'Manuel Montero',
    title:'CUrso node'
  })
});

app.get("/elements", (req, res) => {
  res.render('elements',{
    name:'Manuel Montero',
    title:'CUrso node'
  })
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.listen(port, () => {
  console.log(`Exampe app listening at http://localhost:${port}`);
});
