/* exportando uma função delista */
exports.listAll = (req, res) => {
    let usuarios = [
        { /* criando um array de usuarios*/
            nome: 'teste 01',
            email: 'teste@email.com'
        },
        
        { /* criando um array de usuarios*/
            nome: 'teste 02',
            email: 'teste2@email.com'
        }
    ]
}

/* criando a função post para a rota de usuarios*/
exports.createOne = (req, res) => {
    let response = {
        message: 'Usuário criado con sucesso pelo metódo post.',
        data: req.body
    }
    res.send(response);
}