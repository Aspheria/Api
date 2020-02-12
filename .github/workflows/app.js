const express = require('express');
const app= express();
const morgan= require('morgan');
const bodyPaerser = require('body-pagirser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyPaerser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyPaerser.json()); //json de entrada
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//tratamento quando nao encontra rota
app.use((req, res, next)=>{
    const erro= new Error('Nao encontrado');
    erro.status= 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error, status || 500)
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    });
});

 
module.exports = app;

//npm start



//git congif --system user.name/email || core.editor code