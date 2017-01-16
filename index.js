const express = require('express');
const app = express();

app.use(express.static('src'));
app.use('/bower_components', express.static('bower_components'));

const server = app.listen(3000, () =>{
    console.log("Server started");
});
