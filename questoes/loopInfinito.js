
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;

console.log(media);

//Quando utilizamos loops com contadores, precisamos garantir que um dia eles cheguem até a condição de parada do loop. No código acima, o contador não tem seu valor alterado e para resolver o loop infinito basta decrementá-lo a cada iteração, adicionando a linha contador-- dentro do loop.