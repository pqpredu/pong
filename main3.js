var objeto = 
{
alfa:'sasas',
banana:12,
nitro:3
}
console.log(objeto.alfa)
var valor = objeto['banana'] + objeto.nitro
console.log(valor)

console.log(objeto)
objeto['maria'] = 'abacaxi' //adiciona objeto
console.log(objeto)
delete objeto['maria'] // remover o objeto
console.log(objeto)
