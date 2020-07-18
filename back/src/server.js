import express from 'express';

const app = express();
app.listen(3333);

// var connection = require("../database/connection");

// //SELECT
// connection.select().table("test").then(data => {
//     console.log(data);
//     }).catch(err => {
//         console.log("Erro: ", err);
//     });

    // // INSERT
    // var dados = {
    //     nome: "Larah"
    // }

    // connection.insert(dados).into("test");