const prompt = require ('prompt-sync')();
let residencias = require('./residencias')
const listar = require('./listar')
const adicionar = require('./adicionar')
const remover = require('./remover')

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
        case '1': 
            listar()
            menu()
            break
        case '2':
            adicionar()
            const bairro = prompt('Bairro: ');
            const rua = prompt('Rua: ');
            const  numero= prompt('Número: ');
            adicionarContato({bairro, rua, numero});
            console.log('Residencia adicionada com sucesso!');
            menu()
            break
        case '3':
            remover()
            listar()
            index = parseInt(prompt('Número da residencia que deseja remover: ')) - 1;
            remover(index);
            console.log('Residencia removida com sucesso!');
            break
        case '4':
            atualizar()
            listar();
            index = parseInt(prompt('Número da residencia atualizar: ')) - 1;
            const novoBairro = prompt('Novo nome: ');
            const novaRua = prompt('Novo telefone: ');
            const novoNumero = prompt('Novo email: ');
            atualizar(index, { bairro: novoBairro, rua:novaRua, numero: novoNumero });
            console.log('Residencia atualizada com sucesso!');
            menu()
            break   
        case '5':
            console.log('Saindo')
            return
            break
        default:
            console.log('Opção invalida tente novamente!')
            menu()
            break
    }
}