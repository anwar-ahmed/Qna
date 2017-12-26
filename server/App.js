const express = require('express');
const path = require('path');
const app = express();


app.get('/echo/:msg', (req, res) => {

const msg = req.params.msg;
res.send(`Hello , ${msg}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>{
console.log('Express server listening on port : 3000');
});

