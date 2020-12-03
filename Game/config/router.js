const express = require("express");
const router = express.Router();

router.get("/sobre", function (req, res){
	res.render("index", { layout: false});
})

module.exports = router;