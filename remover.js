
function remover(index){
    const residencias = require('./residencias');
    residencias.splice(index, 1)
}

module.exports = remover