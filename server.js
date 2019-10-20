const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ exteded: true }));
app.use (bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log('We are providing healthcare on Port: ', PORT)
});