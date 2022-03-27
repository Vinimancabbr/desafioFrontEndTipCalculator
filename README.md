# desafioFrontEndTipCalculator
Uma challenge do site FrontEndMentor que eu usei pra treinar minhas habilidades de front-end.

Essa foi uma challenge bastante interessante pra mim, ela foi a segunda que eu fiz 
e acredito que eu fui muito melhor do que na primeira, tanto em questão de qualidade
quanto em questão de tempo (Eu fiz a estrutura inteíra da página em 1 dia, e esse
era bem mais difícil que o outro). O tempo total pra mim terminar foi 4 dias, fazendo
em média 3.5 horas por dia. 
Nesse projeto eu apenas utilizei Html, Css e JavaScript. 

Explicando o processo de criação:

//Layout:
A primeira coisa que eu sempre faço na página é configurar os valores dados do projeto
como fonte, cores, imagens e etc. Após configurar essa parte, eu desenvolvi o formato
da página sem utilizar muito o Css (Eu tentei fazer com que o Html estivesse o mais
completo possível, apenas como layout). Eu utilizei bastante flexbox de qualquer 
forma. Eu separei o projeto em header (onde fica o título) e body (onde fica a calculadora), 
bem simples.
Dentro do body eu separei o flex em 2 elementos de linha para que fossem dividos em 
espaços iguais e denominei um o "lado esquerdo" e o outro o "lado direito". Dentro 
de cada lado eu complementei com Divs até que ficasse bom, usei bastantes inputs e 
buttons no processo também. A maior dificuldade aqui provavelmente foi os ícones dentro 
dos inputs, eu não consegui inserir a imagem dentro do input então eu acabei definindo o 
icone absoluto e configurando a posição dele em relação a tela.

//CSS:
No processo de ir fazendo e terminando a layout, eu configurei quase tudo no Css (não foi muito difícil). 
Algumas configurações de margin, padding e posicionamento foram um pouco complicadas 
(mas são coisas que eu acabei entendendo e não acontecerá em futuros projetos provavelmente.

//Responsividade:
Terminando toda a layout e Css eu comecei a responsividade (Que foi extremamente díficil, já que eu 
cometi o erro de não fazer Mobile First). Eu acabei não fazendo Mobile First pois eu não tinha visto
o arquivo de mobile então eu pensei que era a mesma layout para desktop e mobile, mas tudo bem.
Com muito sofrimento e muitos @media eu consegui fazer o seguinte:
O tamanho do body escala com a altura da página, assim ele sempre ta o maior possível dentro do límite 
(eu ainda desejava que fosse maior em algumas páginas mas isso não é possível devido ao erro do
Mobile First). Além do body escalar com a altura da página, eu fiz que quando o aspect ratio fosse menor
que 4/4 ele trocasse a layout para o mobile (isso funcionou muito bem inclusive, pois além de trocar para 
mobile, ele continua escalando com a altura). O problema é que pela diferença de layouts ser grande, eu
tive que ceder um pouco do tamanho do desktop para que continuasse responsivo. Além disso, tive que corrigir
alguns bugs de quebra de linha mas foi bem simples.

//JavaScript: 
O javaScript eu não achei tão complicado (fiz ele em 5 horas acredito eu). Em suma: 
existe uma uníca função que calcula tudo e distribui os valores. 
Dentro dessa função, tem varios checks pra possíveis erros de valor (por exemplo o numero de pessoas ser 0).
Passando por essas camadas de verificação de valores, temos 4 variáveis 
(Bill - Valor da Conta total; people - Número de pessoas; amount - O valor de gorjeta que cada um 
terá que pagar; Total - Valor total que cada um tera que pagar, já incluso a gorjeta). Essas variaveís se 
relacionam com a matematíca necessária para funcionar e através de getElement eu devolvo os valores para seus
lugares ideais. Além disso, quando você clica no botão "reset", é enviado um argumento de -5, e quando isso 
acontece a função zera e reenvia todos os valores.

//Conclusão:
Esse projeto foi bastante mais complicado que o outro, porém eu acho que consegui resolve-lo bem e 
com um tempo bom. Ainda tenho que melhorar na responsividade.

Qualquer feedback é ótimo, obrigado.




