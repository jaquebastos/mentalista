var numeroSecreto = parseInt(Math.random() * 1031);
var numeroDeTentativas = 0;
var limiteDeTentativas = 10;

//executar o if enquanto o número estiver errado
while (chute != numeroSecreto){
  if (numeroDeTentativas > limiteDeTentativas) {
    alert('a resposta certa era: ' + numeroSecreto + ' tente de novo!')
    break;
  }
  
  var chute = prompt('Digite um número entre 0 e 1000. Você tem 10 chances');
  numeroDeTentativas++;
  //se o chute for igual ao número secreto
    if (chute == numeroSecreto)
   {
     alert('acertou!')
   }
  else if (chute > numeroSecreto) {
    alert('errou... O número secreto é menor')
  }
  else if (chute < numeroSecreto) {
   alert('errou... O número secreto é maior') 
  }
}