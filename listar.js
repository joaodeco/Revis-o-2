const residencias = require('./residencias');

function listar(vetor){
    vetor.forEach((residencia, index) => {
        console.log(`${index+1}, Nome: ${residencia.nome}, Telefone: ${residencia.telefone}, Email: ${residencia.telefone}`)
    });
    moradores.forEach((moradores, index) => {
        console.log(`${index+1} Moradores: ${residencias.moradores}`)
    })
}

module.exports = { listar }