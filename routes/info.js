const {Router} = require("express");
const router = Router()

router.get('/', (req,res) => {
    res.render('info', {
        title:"INFO PAGE",
        isInfo:"true"
    })
})

module.exports = router
