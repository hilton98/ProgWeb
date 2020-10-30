let counter = function (value){
	let cont = value;
	return function () {
		value+=1;
		return value.toString();
	}
}

let incrementar = counter(1);

console.log('Primeira chamada ' + incrementar() );
console.log('Segunda chamada '  + incrementar() );
console.log('Terceira chamada ' + incrementar() );
