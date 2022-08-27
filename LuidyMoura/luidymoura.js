/* --- DEFINIÇÕES  */
let luidymoura;

/* FUNÇÕES */
function LuidyMoura(number){
    /* Retorna um array conforme o padrão Luidy Moura */

    let pattern = []; // Array com todos os numeros do padrao Luidy Moura

    for(let i = 0; i < number; i++){
        // Adiciona os valores e subsitui caso necessario
        if(((i+1)%5) == 0 && ((i+1)%9) == 0){
            // Se o valor for divisivel por 5 e por 9, é substituido por LuidyMoura
            pattern[i] = 'LuidyMoura';
        }else if(((i+1)%5) == 0){
            // Se o valor for divisivel por 5 apenas, é substituido por Luidy
            pattern[i] = 'Luidy';
        }else if(((i+1)%9) == 0){
            // Se o valor for divisivel por 9 apenas, é substituido por Moura
            pattern[i] = 'Moura';
        }else{
            // Caso contrário, permanece como número
            pattern[i] = i + 1;
        }
    }

    return pattern;
}

function getVal(){
    luidymoura = document.getElementById('number').value;
}

function getResult(){
  document.getElementById('result').innerHTML = LuidyMoura(luidymoura); 
}