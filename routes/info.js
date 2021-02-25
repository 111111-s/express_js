const {Router} = require("express");
const router = Router()

router.get('/', (req,res) => {
    res.render('info', {
        title:"INFO PAGE",
        isInfo:"true"
    })
})


router.post("/",(req,res) => {
    console.log(req.body)
    res.redirect("/test")
})


module.exports = router
