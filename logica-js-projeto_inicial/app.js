alert("Boa Vindas ao jogo do numero secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute nao for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute for = ao numero secreto
    if(chute == numeroSecreto){
        break;
    } else {
        if (chute < numeroSecreto){
            alert(`O numero secreto e maior que ${chute}`);
        } else {
            alert(`O numero secreto e menor que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

/*if(tentativas > 1){
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else{
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}*/
