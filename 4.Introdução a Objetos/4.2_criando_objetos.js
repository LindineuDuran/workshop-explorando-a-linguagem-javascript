var fox = {cor: 'prata', modelo: 'Fox', fabricante: 'VW'}
console.log(typeof fox);
console.log(fox);

console.log('Cor do fox:', fox.cor);

// pintando o fox
fox.cor = 'branco';
console.log('Fox depois de pintado:', fox.cor);
console.log('Modelo:', fox['modelo']);

fox.peso = 1100;
console.log(fox);

console.log('Potência:', fox.potencia);

fox.ligar = function(){console.log('ligando o carro');};
console.log(fox);

fox.ligar();

var celta = {
	           cor: 'branco',
               modelo: 'celta',
               fabricante: 'GM',
               ligar: function(){console.log('Ligando o carro');}
             }

console.log(celta);