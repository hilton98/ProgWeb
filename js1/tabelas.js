function geraTabela(){
	tabelaFinal = "";

	for (var i = 1; i <= 10; i++) {
		cabecalho = "<thead><tr><th colspan=2> Produtos de "+i+" </th></tr></thead>";
		for (var j = 1; j<=10; j++){
			celulas = "<tr> <td> "+i+'x'+j+" </td> <td> "+i*j+" </td> </tr>";
			tabelaFinal+=celulas;
		}
		tabelaFinal = "<table border="+1+"> "+cabecalho+""+tabelaFinal+"</table>";
		document.writeln(tabelaFinal);
		tabelaFinal = "";
	}
}

geraTabela();
