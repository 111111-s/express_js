const express = require("express");
const exphbs = require("express-handlebars")
const path = require("path")

const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname:"hbs"
})


app.use(express.static('public'))

app.engine("hbs",hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')


app.get('/', (req,res) => {
    res.render('index',{
        title:"MAIN PAGE",
        isHome:"true"
    })
})

app.get('/info', (req,res) => {
    res.render('info', {
        title:"INFO PAGE",
        isInfo:"true"
    })
})
app.get('/test', (req,res) => {
    res.render('test', {
        title:"TEST PAGE",
        isTest:"true"
    })
})


const PORT = process.env.PORT || 3006
app.listen(PORT, () => {
    console.log(`server starting on port: ${PORT}`)
})

