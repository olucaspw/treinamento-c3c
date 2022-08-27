/*
    Terceira questão da Avaliação 3 do processo seletivo da C3C Software 
    Feito por Lucas Azevedo de Oliveira
*/

/* --- INICIALIZAÇÃO --- */
const MINIMUM = 38 //Menor nota que leva ao arredondamento
const MAX = 100 // Nota máxima da prova
var startGrade;

/* --- FUNÇÕES --- */
function rounding(grade){
    /* Arredonda a nota e devolve o resultado de aprovação */

    if(grade >= MINIMUM){
        //Verifica se a nota pode ser arredondada

        let rounded = false; // Auxiliar pra determinar se a nota foi arredondada
        let newGrade; // Nova nota em caso de arredondamento
        let tenPart = Math.floor(grade/10)*10; // Separa a parte decimal da nota
        let unit = grade - tenPart; // Separa as unidades da nota

        if(unit == 8 || unit == 9){
            // Se as unidades da nota forem 8 ou 9, a nota será arredondada para a proxima casa decimal
            newGrade = tenPart + 10;
            rounded = true;
        }else if(unit == 3 || unit == 4){
            // Se as unidades da nota forem 3 ou 4, a nota será arredondada para a mesma casa decimal mas de unidade 5
            newGrade = tenPart + 5;
            rounded = true;
        }else{
            //Se nao responder nenhum dos casos, a nota é a mesma
            rounded = false;
        }

        // Imprime os resultados no console
        if(rounded == false){
            // Se a nota foi arredondada
            document.getElementById('result').innerHTML = `Aprovado! Nota final: ${grade}`;
        }else{
            // Se a nota foi arredondada
            document.getElementById('result').innerHTML = `Aprovado! Nota final: ${newGrade}`;
        }

    }else{
        // Caso a nota mínima não seja atingida o aluno será reprovado
        document.getElementById('result').innerHTML = `Reprovado! Nota final: ${grade}`;
    }
}

function getVal(){
    startGrade = document.getElementById('grade').value;
    if(startGrade < 0 || startGrade > 100){
        alert('A nota deve ser no intervalo de 0 a 100')
    }else{
        rounding(startGrade)
    }
}