const express = require("express");
const {v4} = require('uuid');

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get('/tasks', (req, res) => {
  res.json([]);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if(!title || !description) return res.statusCode(500);
    res.json({ 
        title:'mis tareas',
        description: "test desc",
        id: v4()
 });
});


module.exports = app;


