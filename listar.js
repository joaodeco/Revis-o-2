const residencias = require('./residencias');

function listar(){
    residencias.forEach((residencia, index) => {
        console.log(`${index+1}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Email: ${residencia.numero}, Moradores: ${residencia.moradores}`)
    });

}

module.exports = listar