
const Router = require("express");
const router = new Router();

const {getAllexchanges} = require("./exchangesController");



router.get('/getAllexchanges', (req,res) => {
    getAllexchanges(req,res)
})



module.exports = router;