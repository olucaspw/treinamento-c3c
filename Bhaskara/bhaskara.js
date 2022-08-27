/*
    Segunda questão da Avaliação 3 do processo seletivo da C3C Software 
    Feito por Lucas Azevedo de Oliveira 
*/

/* --- INICIALIZAÇÃO --- */
let coefficients = []; // Array com os coeficientes

coefficients[0] = 0;
coefficients[1] = 0;
coefficients[2] = 0;

/* --- FUNÇÕES --- */
function eqSolver(){
    /* Calcula as raizes da equação */

    // Variáveis auxiliares
    let a = coefficients[0]
    let b = coefficients[1]
    let c = coefficients[2]

    // Calcula o delta
    const delta = (b**2) - (4*a*c); 

    // Calcula as raízes
    if(delta >= 0){
        //Caso delta não seja negativo

        let roots = []

        if(a == 0 && b == 0){
            // Caso os coeficientes com x sejam 0, a raiz é a propria constante
            roots[0] = c;
        }else if(a == 0){
            // Caso o coeficiente quadratico seja 0, a raíz é a solução da função afim
            if(c != 0){
                roots[0] = c/b;
            }else{
                roots[0] = 0;
            }
        }else{
            //Caso o coeficiente quadratico não seja nulo
            roots[0] = (((-1*b) + Math.sqrt(delta))/(2*a)).toFixed(2);
            roots[1] = (((-1*b) - Math.sqrt(delta))/(2*a)).toFixed(2);
        }
        document.getElementById('result').innerHTML = `f(x) = ${printEQ(a, b, c)} ⇒ (${roots.join(', ')})`; // Retorna no arquivo a equação e a solução
    }else{
        document.getElementById('result').innerHTML = `f(x) = ${printEQ(a, b, c)} ⇒ Delta é negativo!`; // Retorna no arquivo a equação e a solução
    }
    
}

function getVal(id){
    //Coleta o valor das caixas e atribui ao seu respectivo valor na array e executa a eqSolver

    coefficients[id] = document.getElementById(id).value;
    eqSolver(); 
}

function printEQ(a, b, c){
    /* 
        Mostra a equação em tempo real 
        a, b e c são os coeficientes da equação
    */


    let eqAUX = ''; // Auxiliar de texto

    if(a != 0){
        // Imprime o coeficiente com o x a potencia, caso coeficiente não seja 0
        eqAUX += (a + 'x²');
    }

    if(b != 0){
        // Imprime o coeficiente com o x, caso o coeficiente não seja 0
        if(b > 0){
            // Imprime o sinal de + junto ao termo
            eqAUX += ('+' + b + 'x');
        }else{
            eqAUX += (b + 'x');
        }
        
    }

    if(c != 0){
        // Imprime a constante, caso nao seja 0
        if(c > 0){
            // Imprime o sinal de + junto a constante
            eqAUX += ('+' + c);
        }else{
            eqAUX += (c);
        }
    }

    return eqAUX; // Retorna a equação em forma de string
}


