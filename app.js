let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
console.log (numeroSecreto)
let tentativas = 1;


function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag)
    campo.innerHTML =  texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
 function exibirMensagemInicial (){
  exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
 }

exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector ('input').value;


    if (chute == numeroSecreto) {
      exibirTextoNaTela ('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Parabéns!!! Você adivinhou o Número Secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela ('p', mensagemTentativas)
      document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'Tente um número menor');
        
      } else {
        exibirTextoNaTela ('p', 'Tente um número maior');
    }
    //tentativas = tentativas + 1; 
    tentativas++;
    limparCampo ();



  }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1 );
    let quantidadeElementosLista = listaDeNumeroSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes (numeroEscolhido)) {
      return gerarNumeroAleatorio ();
    } else {
      listaDeNumeroSorteados.push (numeroEscolhido);
      console.log (listaDeNumeroSorteados)
      return numeroEscolhido;
    } 
    
}

function limparCampo () {
  let chute = document.querySelector ('input');
  chute.value = '';
  
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}


