
// TODO Test
var connection = require("../connection");
//SELECT
connection.select("*").table("test").then(data => {
    console.log(data);
    }).catch(err => {
        console.log("Erro: ", err);
    });
