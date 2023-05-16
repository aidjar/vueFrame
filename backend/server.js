const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;

var messages = [
    
  ];

app.use(cors());
app.use(bodyParser.json());
app.get('/messages', (req, res) => {
    res.send(messages);
});
app.post('/messages', (req, res) =>{
    let msg = req.body;
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
})
app.listen(port, ()=> console.log('app running'))