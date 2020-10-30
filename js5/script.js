
function calcular(){
	raio = document.getElementById("oraio").value;
	ac = Math.PI * (raio * raio);
	ac = parseFloat(ac.toFixed(2));
	cir = 2 * Math.PI * raio;
	cir = parseFloat(cir.toFixed(2));

	document.getElementById("ac").value = ac;
	document.getElementById("c").value = cir;

}