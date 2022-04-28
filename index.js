const express = require("express");
const app = express();
const port = 5000;
const fs = require('fs');
const cors = require('cors');

app.get("/telephones", (req, res, next) =>{
fs.readFile(__dirname + '/' + 'phones.json', 'utf8', (err, data) => {
    res.end(data);
});
});

app.listen(port, () => {
 console.log(`Server running on port http://localhost:${port}`);
})

module.exports = (app) => {
    
    app.use(
      cors({
        credentials: true,
        origin: process.env.ORIGIN || "http://localhost:3000",
      })
    );
}