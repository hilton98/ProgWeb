var cont = 0
var win = true;
var poss = ["Papel","Pedra","Tesoura"];

console.log("Escolha sua jogada:");
console.log("1 - Papel");
console.log("2 - Pedra");
console.log("3 - Tesoura");

jogada = parseInt(prompt("Escolha sua jogada"));
console.log("Você jogou "+poss[jogada-1]+"");
cpu = Math.floor(Math.random() * (4-1)+1);

while(win == true){
	
	if (jogada === 1 && cpu === 3) {
		console.log("O computador jogou Tesoura");
		console.log("Você perdeu! sua pontuação foi de "+cont+"");
		win = false;
	}
	if(jogada === 1 && cpu === 2){
		console.log("O computador jogou Pedra");
		console.log("Você ganhou");
		cpu = Math.floor(Math.random() * (4-1)+1);
		cont++;
	}
	if(jogada === 2 && cpu === 1){
		console.log("O computador jogou Papel");
		console.log("Você perdeu! sua pontuação foi de "+cont+"");
		win = false;
	}
	if(jogada === 2 && cpu === 3){
		console.log("O computador jogou Tesoura");
		console.log("Você ganhou");
		cpu = Math.floor(Math.random() * (4-1)+1);
		cont++;

	}
	if(jogada === 3 && cpu === 2){
		console.log("O computador jogou Pedra");
		console.log("Você perdeu! sua pontuação foi de "+cont+"");
		win = false;
	}
	if(jogada === 3 && cpu === 1){
		console.log("O computador jogou Papel");
		console.log("Você ganhou");
		cpu = Math.floor(Math.random() * (4-1)+1);
		cont++;

	}
	if (jogada === cpu) {
		console.log("O computador jogou "+poss[cpu-1]+"");
		console.log("A rodada empatou");
		cpu = Math.floor(Math.random() * (4-1)+1);
	}

	if (jogada > 3 || jogada < 1) {
		console.log("Inválido!");
		win = false;
	}

}
