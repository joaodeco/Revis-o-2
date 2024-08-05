const residencias = require('./residencias');

function listar(){
    residencias.forEach((residencia, index) => {
        console.log(`${index+1}, Nome: ${residencia.nome}, Telefone: ${residencia.telefone}, Email: ${residencia.telefone}, Moradores: ${residencia.moradores}`)
    });

}

module.exports = { listar }