/* criando uma constante para importar a express utilisando o padrão require*/
const express = require('express');

/* importando o body-parser para poder trabalhar com requisições*/
const bodyParser = require('body-parser');

/* criando variavel de ambiente para o servidor e passando uma porta como padrão de acesso*/
const port = process.env.PORT || 3000;

/* criando uma variavél para a aplicação chamando seu construtor express()*/
const app = express();

/* o app agora vai utilizar os recursos abaixo, iniciado em app.use()*/
app.use(bodyParser.urlencoded({ extended: true})); /* para maiores informações, consultar a documentação npm*/

/* utilisando o body parser no forma json*/
app.use(bodyParser.json())

/* criando uma rota padrão ou raiz, se for no metodo get*/
/* request = req recebe por padrão os dados da requisição,
respouse = res tratamos a resposta*/

/* metodo de criar rotas simpificado ou poluindo o script
    app.route('/')
    .get((req, res) => {   /*arrow function => {função anonima}
        res.send('Servidor Funcionando pelo metódo get.');
    })
    .post((req, res) => {  /* req.body é o corpo da requisição
        let reponse = { 
            message: "Usuário criado com sucesso!", /* tratando a resposta no metódo post
            data: req.body /* exibir na resposta o corpo da requisição
        };
        res.send(reponse); /* recebendo o tratamento acima
    });
*/

/* metodo de criar rotas chamando de outro arquivo*/
const routes = require('./src/routes/usuarioRoutes.js');/* acessando a pasta src e o arquivo src/usuarioRoutes.js*/

/* nesse momento o routes passa a ser uma função*/
routes(app); /* passando o app como objeto da função*/

app.route('/')
    .get((req, res) => {   /*arrow function => {função anonima}*/
        res.send('API TodoList funcionando!.');
    });

/* passando uma porta ou varivel de ambiente dentro do construtor*/
/* app.listen(3000); passando porta dentro do construtor*/
app.listen(port); /* passando variavel de ambiente dentro do construtor*/

/* exibindo uma mensagem no terminal para mostra o servidor funcionando
console.log('Servidor Funcionando por uma porta.');*/
console.log('Servidor Funcionando por uma variavél de ambiente, Porta: ',port);