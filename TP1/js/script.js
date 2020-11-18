(function () {

  const FPS = 1; 
  let gameDimensions = [1243, 960];
  let focoDimensions = [100, 130];
  let devastacaoDimensions = "160px";
  let vidaDimensions = [88,56];
  let focos = [];
  let probFoco = 25;
  let score = 0;
  let reserva;
  let gameLoop;
  let duracaoFogo;

  function valorScore(scoreAtual){
    scoreAtualTexto = scoreAtual.toString();
    qtd_zero_a_esquerda = 5 - scoreAtualTexto.length;
    scoreEstilizado = "";
    for(i = 0; i < qtd_zero_a_esquerda; i++){
      scoreEstilizado+="0";
    }
    pontuador = document.getElementsByClassName("pontuacao");
    pontuador[0].removeChild(pontuador[0].firstChild);
    pontuador[0].appendChild(document.createTextNode(scoreEstilizado+=scoreAtualTexto));
  }

  function devastar(){
    if(focos.length>0){
      var fogo = focos.shift();
      var topLeft = fogo.coordenadas; 
      var devastacao = new Devastacao();
      fogo.apagarChama();
      devastacao.setarWidthHeight(topLeft[0],topLeft[1]);
    }
  }

  function run () {
    if (Math.random() * 100 < probFoco) {
      let foco = new FocoIncendio();
      focos.push(foco);
      devastacao = setInterval(devastar, 2000/FPS);
    }
  }

  function init() {
    reserva = new Reserva();
  }


  window.addEventListener("keydown", function (e) {
    if (e.key === 'o') {
      clearInterval(gameLoop);
    }
    if(e.key === 's'){
      gameLoop = setInterval(run, 1000/FPS);
  
    }
  })

  class Reserva {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${gameDimensions[0]}px`;
      this.element.style.height = `${gameDimensions[1]}px`;
      document.body.appendChild(this.element);
    }
  }

  class FocoIncendio {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "foco-incendio";
      this.element.style.width = `${focoDimensions[0]}px`;
      this.element.style.height = `${focoDimensions[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-focoDimensions[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-focoDimensions[1])))}px`;      
      
      this.element.addEventListener('mouseup',(e) => {  
        //e.toElement.remove(); NÃO FUNCIONA NO FIREFOX
        e.target.remove();
        score+=10;
        valorScore(score);
      });
      reserva.element.appendChild(this.element);
    }
    get coordenadas(){
      var coord = [];
      coord.push(this.element.style.left);
      coord.push(this.element.style.top);
      return coord;
    }
    apagarChama(){
      this.element.style.width = "0px";
      this.element.style.height = "0px";
    }
  }

  class Vidas{
    constructor(){
      this.element = document.createElement("div");
      this.element.className = "vidas";
      this.element.style.width = `${vidaDimensions[0]}px`;
      this.element.style.height = `${vidaDimensions[1]}px`;
      this.element.style.right = `${gameDimensions[0]}px`;
      this.element.style.bottom =`${gameDimensions[1]-440}px`;
      document.body.appendChild(this.element);
    }
  }

  class Pontuacao{
    constructor(){
      this.element = document.createElement("div");
      this.element.className = "pontuacao";
      this.element.style.width = `${vidaDimensions[0]}px`;
      this.element.style.height = `${vidaDimensions[1]}px`;
      this.element.style.right = `${gameDimensions[0]-593}px`;
      this.element.style.bottom =`${gameDimensions[1]-440}px`;
      this.element.appendChild(document.createTextNode("00000"));
      document.body.appendChild(this.element);
    }

  }

  class Devastacao{
    constructor(){
      this.element = document.createElement("div");
      this.element.className = "devastacao";
      this.element.style.width = devastacaoDimensions;
      this.element.style.height = devastacaoDimensions;     
      reserva.element.appendChild(this.element);
    }
    setarWidthHeight(value_left, value_top){
      this.element.style.left = value_left;
      this.element.style.top = value_top;
    }

  }



  init();
  vidas = new Vidas();
  vidas1 = new Vidas();
  vidas2 = new Vidas();
  vidas3 = new Vidas();
  vidas4 = new Vidas();
  pontuacao = new Pontuacao();
})();
