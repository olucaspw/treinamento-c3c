/*
    Primeira questão da Avaliação 3 do processo seletivo da C3C Software 
    Feito por Lucas Azevedo de Oliveira 
*/

/* --- INICIALIZAÇÃO --- */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let sizeValues = Array(); //Array com os valores dos lados do triãngulo

/* --- FUNÇÕES --- */  
function evaluate(sides){  
    /* Avalia e determina o tipo de triângulo */

    if(sides[1] == sides[0] && sides[2] == sides[0]){
        //Todos os lados iguais
        console.log('Equilatero');
    }else if((sides[1] == sides[0] && sides[2] != sides[0]) || (sides[2] == sides[0] && sides[1] != sides[0]) || (sides[1] == sides[2] && sides[0] != sides[2])){
        //Dois lados iguais
        console.log('Isoceles');
    }else{
        //Nenhum lado igual
        console.log('Escaleno');
    }
}


function init(){
    /* Faz a leitura - com readline - dos valores dos lados do triângulo e o determina - com evaluate -*/

    readline.question('Qual o primeiro lado? ', sideA => {
        sizeValues[0] = sideA;
        readline.question('Qual o segundo lado? ', sideB => {
            sizeValues[1] = sideB;
            readline.question('Qual o terceiro lado? ', ladoC => {
                sizeValues[2] = ladoC;
                evaluate(sizeValues);
                readline.close();
            }); 
        }); 
    });
}

init();

