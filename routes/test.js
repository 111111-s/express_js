const {Router} = require("express");
const router = Router()

router.get('/', (req,res) => {
    res.render('test', {
        title:"TEST PAGE",
        isInfo:"true"
    })
})

module.exports = router
