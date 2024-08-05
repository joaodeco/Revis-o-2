const { residencias } = require('./residencias');

const prompt = require ('prompt-sync')();

function adicionar(vetor){
    let nome = prompt('Qual seu nome: ')
    let telefone = prompt('Qual seu telefone: ')
    let email = prompt('Qual seu email: ')

    vetor.push({nome, telefone, email})
}

module.exports = { adicionar }