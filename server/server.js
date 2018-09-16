const path = require('path');
const express = require('express');

var app = express();

var publicPath = path.join(__dirname, '../public');

var port = process.env.PORT || 3000;

app.use(express.static(publicPath));

console.log(publicPath);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
