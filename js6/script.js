
barra1 = document.getElementById("barra1").value;
barra2 = document.getElementById("barra2").value;
barra3 = document.getElementById("barra3").value;
barra4 = document.getElementById("barra4").value;
barra5 = document.getElementById("barra5").value;

botao = document.getElementById("botaoGrafico");

botao.onclick = function() {


document.getElementById("borda").style.setProperty("display","block ruby");
document.getElementById("borda").style.setProperty("margin-top","30px");

larBar = document.getElementById("largBar").value;

document.getElementById("graficoBar1").style.setProperty("background-color","red");
document.getElementById("graficoBar1").style.setProperty("width",larBar+"px");
document.getElementById("graficoBar1").style.setProperty("height",barra1+"px");
document.getElementById("graficoBar1").style.setProperty("margin-right","10px");

document.getElementById("graficoBar2").style.setProperty("background-color","red");
document.getElementById("graficoBar2").style.setProperty("width",larBar+"px");
document.getElementById("graficoBar2").style.setProperty("height",barra2+"px");
document.getElementById("graficoBar2").style.setProperty("margin-right","10px");

document.getElementById("graficoBar3").style.setProperty("background-color","red");
document.getElementById("graficoBar3").style.setProperty("width",larBar+"px");
document.getElementById("graficoBar3").style.setProperty("height",barra3+"px");
document.getElementById("graficoBar3").style.setProperty("margin-right","10px");

document.getElementById("graficoBar4").style.setProperty("background-color","red");
document.getElementById("graficoBar4").style.setProperty("width",larBar+"px");
document.getElementById("graficoBar4").style.setProperty("height",barra4+"px");
document.getElementById("graficoBar4").style.setProperty("margin-right","10px");

document.getElementById("graficoBar5").style.setProperty("background-color","red");
document.getElementById("graficoBar5").style.setProperty("width",larBar+"px");
document.getElementById("graficoBar5").style.setProperty("height",barra5+"px");



} 

//100 150 120 80 40 
//30