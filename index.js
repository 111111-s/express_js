const express = require("express");
const exphbs = require("express-handlebars")
const path = require("path")

const Homeroutes = require('./routes/home')
const Testroutes = require('./routes/test')
const Inforoutes = require('./routes/info')



const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname:"hbs"
})


app.use(express.static('public'))

app.engine("hbs",hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use("/",Homeroutes)
app.use("/test",Testroutes)
app.use("/info",Inforoutes)


const PORT = process.env.PORT || 3006
app.listen(PORT, () => {
    console.log(`server starting on port: ${PORT}`)
})

