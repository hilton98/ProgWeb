(function () {

    const FPS = 1; 
    let gameDimensions = [1243/2, 960/2];
    let gameOverDimensions = [1000/2,16/2];
    let focoDimensions = [100/2, 130/2];
    let devastacaoDimensions = "80px";
    let vidaDimensions = [88/2,56/2];
    let focos = [];
    let caveiras = [];
    let arvoresVida = [];
    let devastacoes = [];
    let probFoco = 25;
    let score = 0;
    let reserva;
    let gameLoop;
  
    function reiniciarJogo(){
      //document.getElementsByTagName('BODY')[0].innerHTML = '';
      window.location.reload();
      focos = [];
      caveiras = [];
      arvoresVida = [];
      score = 0;
      init();
      clearInterval(gameLoop);
    }
  
    function numeroIntAleatorio(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function brotarCaveira(){
      let caveira = new Caveiras();
      caveiras.push(caveira);
      botarCaveiras = setTimeout(devastarCaveira, 2000/FPS);
    }
  
    function cincoVidas(){
      for(i = 0; i < 5; i++){
      arvoresVida[i] = new Vidas();
      }
    }
  
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
  
    function devastarCaveira(){
      if (caveiras.length > 0) {
        var cav = caveiras.shift();
        if ( cav.aceso ) {  
          var topLeft = cav.coordenadasCav; 
          var devastacao = new Devastacao();
          cav.apagarCaveira();
          devastacao.setarWidthHeight(topLeft[0],topLeft[1]);
          cav.aceso = false;
          cav.gameOver();
          devastacoes.push(devastacao);
          
        }
      }
  
    }
  
    function devastarFoguinho(){
      if (focos.length > 0) {
        var fogo = focos.shift();
        if (fogo.aceso ) {  
          var topLeft = fogo.coordenadas; 
          var devastacao = new Devastacao();
          fogo.apagarChama();
          devastacao.setarWidthHeight(topLeft[0],topLeft[1]);
          fogo.aceso = false;
          fogo.gameOver();
          devastacoes.push(devastacao);        
        }
      }
    }
  
    function run () {
      if (Math.random() * 100 < probFoco) {
        let foco = new FocoIncendio();
        focos.push(foco);
        devastacao = setTimeout(devastarFoguinho, 2000/FPS);
        botarCaveiras = setTimeout(brotarCaveira, 20000/(numeroIntAleatorio(1,4)));
      }
    }
  
    function init() {
      reserva = new Reserva();
      cincoVidas();
      pontuacao = new Pontuacao();
      gameLoop = setInterval(run, 1000/FPS );
    }
  
    window.addEventListener("keydown", function (e) {
      if (e.key === 'o') {
        clearInterval(gameLoop);
      }
      
      if(e.key === 's'){
        reiniciarJogo();
        clearInterval(gameLoop);
      }
  
      if (e.key === 'p' ) {
        alert("jogo pausado, aperte em OK para continuar")
      }
  
    })
  
    class Reserva {
      constructor () {
        this.element = document.createElement("div");
        this.element.className = "reserva";
        this.element.style.width = `${gameDimensions[0]}px`;
        this.element.style.height = `${gameDimensions[1]}px`;
        
        document.getElementById("jogo").appendChild(this.element);
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
        this.aceso = true;      
    
        this.element.addEventListener('mouseup',(e) => {  
          //e.toElement.remove(); NÃO FUNCIONA NO FIREFOX
          e.target.remove();
          score+=10;
          valorScore(score);
          this.aceso = false;
  
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
      gameOver(){
        if(arvoresVida.length > 1){
          arvoresVida.pop().menosUm();
        }else{
          var gameover = new GameOver();     
        }
      }
    }
  
    class Caveiras{
      constructor () {
        this.element = document.createElement("div");
        this.element.className = "caveira";
        this.element.style.width = `${focoDimensions[0]}px`;
        this.element.style.height = `${focoDimensions[1]}px`;
        this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-focoDimensions[0])))}px`;
        this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-focoDimensions[1])))}px`;
        this.aceso = true;      
        
        this.element.addEventListener('mouseup',(e) => {  
          //e.toElement.remove(); NÃO FUNCIONA NO FIREFOX
          e.target.remove();
          score+=20;
          valorScore(score);
          this.aceso = false;
  
        });
        reserva.element.appendChild(this.element);
      }
      get coordenadasCav(){
        var coord = [];
        coord.push(this.element.style.left);
        coord.push(this.element.style.top);
        return coord;
      }
  
      apagarCaveira(){
        this.element.style.width = "0px";
        this.element.style.height = "0px";
      }
  
      gameOver(){
        if(arvoresVida.length > 2){
          arvoresVida.pop().menosUm();
          arvoresVida.pop().menosUm();
        }else{
          var gameover = new GameOver();
        }
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
        document.getElementById("cabecaGame").appendChild(this.element);      
      }
      menosUm(){
        this.element.style.height = "0px";
      }
    }
  
    class Pontuacao{
      constructor(){
        this.element = document.createElement("div");
        this.element.className = "pontuacao";
        this.element.style.width = `${vidaDimensions[0]}px`;
        this.element.style.height = `${vidaDimensions[1]}px`;
        this.element.style.right = `${gameDimensions[0]-1171}px`;
        this.element.style.bottom =`${gameDimensions[1]-440}px`;
        this.element.appendChild(document.createTextNode("00000"));
        document.getElementById("cabecaGame").appendChild(this.element);
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
  
    class GameOver{
      constructor(){
        this.element = document.createElement("div");
        this.element.className = "gameOver";
        this.element.style.width = `${gameOverDimensions[0]}px`;
        this.element.style.height = `${gameOverDimensions[1]}px`;
        this.element.style.right = "0px";
        this.element.style.bottom =`${gameDimensions[1]-440}px`;
        this.element.appendChild(document.createTextNode("SE QUEIMOU :("));
        reserva.element.appendChild(this.element);
      }
  
    }
  
    init();
  })();
  