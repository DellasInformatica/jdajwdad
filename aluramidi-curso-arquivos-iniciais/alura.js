// Pom
 function tocaSomPom (idElementoAudio) { //é uma funçao chamada tocaSomPom que tenta reproduzir um som com base no ID de um elemento de áudio.
 	document.queryselector(idElementoAudio).play(); //
 }

 const listaDeTeclas = document.querySelectorAll('.tecla'); //aqui podemos selecionar todos os elementos com  "tecla" no documento JS que armazena em uma lista chamada listaDeTeclas.

 let contador = 0;  //Você inicia um contador em 0 e entra em um loop while que continua enquanto o contador for menor que o número de elementos na listaDeTeclas.

 while (contador < listaDeTeclas.lenght) {
 	listaDeTeclas[contador].onclick = tocaSomPom;
 	contador = contador + 1;
 	console.log(contador);
 }
 //Dentro do looping você consegue colocar a função tocaSomPom fazendo com que o som seja reproduzido quando esses elementos são clicados.