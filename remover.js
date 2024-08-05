const { listar } = require("./listar")
const prompt = require('prompt-sync')

function remover(){
    listar()
    let opcaoRemover = prompt('Qual o número da opção que deseja remover')
    vetor.splice(opcaoRemover, 1)
    console.log('Removido com sucesso')
}