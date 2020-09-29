/* exportando este conteúdo como modulo para poder ser enchergado em outro arquivo,
ou seja, para que qualquer arquivo tenha acesso ao conteúdo deste arquivo*/

module.exports = function (app) { /* o app agora passa a ser o objeto da função*/
    /* modelo siples de fazer a rota, porém, não é indicado, a construção deste array deve ser através de um controlador
    app.route('/usuarios') /* cirando rota usuario
    .get((req, res) => {/* se for no metódo get
        let usuarios = [/* rad cold ou mocakp de dados
            { /* criando um array de usuarios
                nome: 'teste 01',
                email: 'teste@email.com'
            },
            { /* criando um array de usuarios
                nome: 'teste 02',
                email: 'teste2@email.com'
            },
        ]
        res.send(usuarios);/* função que lista, neste caso, usuarios
    });
    */
    /* criando o contralador da rota que vai chamas o array de lista do usuario */
    const usuarios = require('../controllers/usuariosControllers.js'); /* para poder acessar o controlador temos que sair desta pasta e ir para a pasta de onde esta o controlador ('../')*/
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne);
}