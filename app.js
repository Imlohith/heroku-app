const express = require('express')

const app = express();

app.use("/", (req, res) => {
    res.send("hello from heroku-app")
})

app.listen(3000, () => {
    console.log('app liestimg at 3000 port')
})