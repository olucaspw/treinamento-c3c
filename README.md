## Bem Vindo!

Esse repositório contém os arquivos da **Atividade 03** do processo seletivo da **C3C Software** .
Abaixo estão as questões e a minha interpretação de cada uma.

## Questão 01 - Tipos de Triângulo

>Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:   
Equilátero: Os três lados são iguais.  
Isósceles: Dois lados iguais.  
Escaleno: Todos os lados são diferentes.  
Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)

**Interpretação:**
Foram feitos 3 *inputs*, cada um relativo a um lado do triângulo. Após isso é feita a comparação desses lados para determinar qual seu tipo - Equilátero, Isóceles ou Escaleno -. Os resultados não levam em consideração que todo triângulo equilátero é isóceles. Além disso, também não considerado as regras de existência de um triângulo, como determinado pela própria questão.

## Questão 02 - Bhaskara

>Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara.  
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.  
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.  
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

**Interpretação:**
Nessa questão, foi feito o registro dos 3 coeficientes por meio de 3 *inputs* diferentes. A equação e seu resultado é feito assim que que um valor do *input* é alterado. Caso $\Delta \ge 0$, a solução da equação é dada com os 2 valores das raízes. Caso contrário, o retorno é apenas a equação e que o $\Delta$ é negativo. A solução também é dado caso o coeficiente quadrático seja igual a 0, gerando uma função afim, ou no caso de ser apenas a constante, que a solução é a própria constante.

## Questão 03 - Sistema de Notas
>Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação:  
>* Todo aluno recebe uma nota de 0 a 100.  
>* Alunos com nota abaixo de 40 são reprovados.  
>* As notas possuem a seguinte regra de arredondamento:  
>* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.  
>* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno.  
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

**Interpretação**
Para essa, um valor de entrada é recebido e conferido caso concorde as regras de aprovação. No caso, 38 seria a nota mínima, já que essa seria arredonda para 40, que é de fato a nota mínima. Senão, resulta numa reprovação. É feito também o tratamento pra caso o valor seja menor que 0 ou maior que 100, resultando num alerta. A regra de arredondamento é feita para todos os valores acima de 40. Exemplos: 53 $\rightarrow$ 55, 99 $\rightarrow$ 100, 72 $\rightarrow$  72].

## Questão 04 - Luidy Moura
>Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.    
Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por “Moura”.  
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.   
Exemplo de retorno:
Entrada:  
45  
Saída:  
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.

**Interpretação**
Recebe um valor *input* que, com esse, é gerado e apresentado uma sequência numérica e substituído caso o valor seja divisível por 5, por 9 ou por 5 e 9. São trocados para Luidy, Moura e LuidyMoura, respectivamente.