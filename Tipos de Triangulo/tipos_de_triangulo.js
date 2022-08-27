/*
    Primeira questão da Avaliação 3 do processo seletivo da C3C Software 
    Feito por Lucas Azevedo de Oliveira 
*/

/* --- INICIALIZAÇÃO --- */
let sizeValues = []; //Array com os valores dos lados do triãngulo

/* --- FUNÇÕES --- */  
function evaluate(sides){  
    /* Avalia e determina o tipo de triângulo */

    if(sides[1] == sides[0] && sides[2] == sides[0]){
        //Todos os lados iguais
        document.getElementById('result').innerHTML = 'Equilatero';
    }else if((sides[1] == sides[0] && sides[2] != sides[0]) || (sides[2] == sides[0] && sides[1] != sides[0]) || (sides[1] == sides[2] && sides[0] != sides[2])){
        //Dois lados iguais
        document.getElementById('result').innerHTML = 'Isoceles';
    }else{
        //Nenhum lado igual
        document.getElementById('result').innerHTML = 'Escaleno';
    }
}

function getVal(id){
    /* Pega o valor da caixa e atribui a sua respectiva array */
    sizeValues[id] = document.getElementById(id).value;
}

function getResult(){
    if(sizeValues.length != 3 || sizeValues.includes('')){
        // Caso as 3 caixas não estejam com valor 
        document.getElementById('result').innerHTML = '';
        alert('Todos os campos precisam de um valor!')
    }else{
        // Caso as 3 caixas estejam preenchidas, os valores seram avaliados
        evaluate(sizeValues)
    }
}   



