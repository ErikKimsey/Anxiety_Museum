

const express = require('express');
const app = express();

app.use('/images/', express.static(__dirname + '/app/src/assets'));
app.get('/images', (req, res)=>{
    res.send(res.data);
    console.log(res.data);
});

app.listen(5000, ()=> console.log('Listening on 5000'));