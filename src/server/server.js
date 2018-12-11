const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.set({'Content-Type': 'application/json'})
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
