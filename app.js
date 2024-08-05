const prompt = require ('prompt-sync')();
const residencias = require('./residencias')
const listar = require('./listar')
const adicionar = require('./adicionar')

menu()
function menu(){
    console.log(`
    1. Listar Residencias
    2. Adicionar Residencia
    3. Remover Residencia
    4. Atualizar Residencia
    5. Sair
    `)

    let opcao = prompt('Qual sua opção? ')

    switch(opcao){
        case 1: 
            listar(residencias)
            menu()
            break
        case 2:
            adicionar( vetor )
            menu()
            break
        case 3:
            remover()
            menu()
            break
        case 4:
            atualizar()
            menu()
            break   
        case 5:
            break
    }
}