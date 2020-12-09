function sobre(req, res){
	res.render("main/index");
}

function ui(req, res){
	res.render("main/ui");
}

module.exports = {sobre,ui}