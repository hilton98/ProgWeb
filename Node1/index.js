
const fs = require('fs');
const http = require('http');
const conteudos =  fs.readdirSync(process.argv[2]);

let servidor = http.createServer(function(req,res){
	
	console.log(conteudos);
	conteudos.forEach(function (conteudo){
		res.write(conteudo + '\n');
	});
	
	res.end();

}).listen(2000);