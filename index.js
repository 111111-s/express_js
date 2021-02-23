const express = require("express");
const exphbs = require("express-handlebars")
const path = require("path")

const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname:"hbs"
})

app.engine("hbs",hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')


app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})


const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`server starting on port: ${PORT}`)
})

