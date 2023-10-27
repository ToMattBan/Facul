const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/player/', async (request, response) => {
    const id = Math.floor((Math.random() * 1000) + 1);
    const { nome, titulo, classe, raça} = request.body;
    await connection('player').insert(
        {
            id,
            nome,
            titulo,
            classe, 
            raça
        }
    )
    return response.json({id});
});

routes.get('/player/', async (request, response) => {
    const players = await connection('player').select('*');
    return response.json(players);
});

routes.post('/pet/', async (request, response) => {
    const id = Math.floor((Math.random() * 1000) + 1);
    const { nome, titulo, cor} = request.body;
    await connection('pet').insert(
        {
            id,
            nome,
            titulo,
            cor
        }
    )
    return response.json({id});
});

routes.get('/pet/', async (request, response) => {
    const pets = await connection('pet').select('*');
    return response.json(pets);
});


module.exports = routes;