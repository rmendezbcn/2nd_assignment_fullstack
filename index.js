
const express  = require('express');
const app = express();

app.use(express.static(__dirname, '/public'));

app.listen(2000, () => console.log('Static server listening on the port 2000'));


