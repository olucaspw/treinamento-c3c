/*
    Segunda questão da Avaliação 3 do processo seletivo da C3C Software 
    Feito por Lucas Azevedo de Oliveira 
*/

/* --- INICIALIZAÇÃO --- */
const coefficients = [3, -15, 12]

/* --- FUNÇÕES --- */
function eqSolver(a, b, c){
    /* Calcula as raizes da equação */
    const delta = (b**2) - (4*a*c)

    if(delta >= 0){
        let roots = []
        roots[0] = (-1*b + Math.sqrt(delta))/2*a
        roots[1] = (-1*b - Math.sqrt(delta))/2*a
        return roots
    }else{
        return "Delta é negativo"
    }
    
}

/* --- IMPRIME RESULTADO --- */
console.log(eqSolver(coefficients[0], coefficients[1], coefficients[2]));
