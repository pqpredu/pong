var caixa = [1,false, 12+3, 'laranja'] //array
var tamdacx = caixa.length // 5

console.log( caixa[0]) //array começam com 0
console.log(caixa[ tamdacx - 1])
console.log(tamdacx)

var cx2 =[
12 + 3/ 5 === 1, //0
'sahusaushasa', //1
'zxnzjxnbca', //2
]
console.log(cx2[0])

caixa.push('gorillaz')
console.log(caixa[caixa.length -1])

caixa.splice(2,1)
console.log(caixa)

caixa.splice(caixa.indexOf('gorillaz'),1)
console.log(caixa)
