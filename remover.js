let listar  = require("./listar")

function remover(index){
    contatos.splice(index, 1)
}

module.exports = { remover }