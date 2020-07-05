const express = require('express')

const app = express();

var port = process.env.PORT || 8080;


app.use("/", (req, res) => {
    res.send("hello from heroku-app")
})

app.listen(port, () => {
    console.log('app started')
})