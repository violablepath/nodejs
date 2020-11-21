const express = require ('express');

const app = express();
app.use(express.json());

/**
 * GET: buscar/listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar informação no backend
 * DELETE: Deletar informação no backend
 */

 /**
  * Parâmetros
  * Query: parametros nomeados enviados na rota
  * ROute params: parametros utilizados para identificar um recurso
  * Request Body: corpo da requisição
  */

app.get('/users',(req, res)=>{
    const params = req.query;
    console.log(params)
    res.json(params)
})

app.post('/users/:id',(req, res)=>{
    const params = req.params;
    console.log(params)
    res.json(params)
})

app.post('/users',(req, res)=>{
    const params = req.body;
    console.log(params)
    res.json(params)
})

app.listen(3001);