if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started AT PORT 3000");
});