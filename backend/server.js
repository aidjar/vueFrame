const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3010;

var messages = [
   {user: "Jim", text: "a"},
   {user: "Jim", text: "b"},
   {user: "Jim", text: "c"},
  ];
var users = [{userName:"Jim", password:"1"}];

app.use(cors());
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
    // const userId = req.header('Authorization').id;
    res.send(messages);
});

app.get('/message/:id', (req, res) => {
  res.send(messages[req.params.id]);
});

app.post('/messages', (req, res) =>{
    const token = req.header('Authorization');
    const userId = jwt.decode(token, '123');
    const user = users[userId];
    let msg = {user: userName, text:req.body.message};
    messages.push(msg);
    res.json(msg);
})

users = []
app.post('/register', (req, res) =>{
  let registerData = req.body;
  let newIndex = users.push(registerData);
  let userId = newIndex - 1;
  let token = jwt.sign(userId, '123');
  res.json(token);
})

app.post('/login', (req, res) =>{
  let loginData = req.body;

  let userId = users.findIndex(user => user.userName == loginData.userName);

  if(userId == -1)
  return res.status(401).send({message: 'name or password is invalid'});

  if(users[userId].password != loginData.password)
    return res.status(401).send({message: 'name or password is invalid'});

  let token = jwt.sign(userId, '123');
  res.json(token);
})

app.listen(port, ()=> console.log('app running'))