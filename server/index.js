const express = require('express');
const path = require('path');


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"../client/index.html"))
// })

// console.log(__dirname)


const app = express();

const port =  process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})