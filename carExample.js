// Entendendo o formato de um objeto javascript

const carro = {
  cor: 'branco',
  velocidade: 0
}

// Utilzando o console, podemos verificar todas as propriedades presentes num objeto
// console.log(carro)


// Podemos utilizar carro.<nome-da-chave> para acessar o valor da chave
// console.log(carro.cor)
// console.log(carro.velocidade)

// Podemos utilizar o spread operator para copiar propriedades para um novo objeto

// const copiaCarro = {
// ...carro
// }

// console.log(carro)
// console.log(copiaCarro)

// ao utilizarmos o spread, criamos cópias independentes

// carro.cor = 'preto'
// copiaCarro.cor = 'vermelho'

// console.log(carro)
// console.log(copiaCarro)

// o mesmo não acontece se utilizarmos atribuição

// const copiaCarro = carro

// copiaCarro.cor = 'preto'

// console.log(carro)
// console.log(copiaCarro)


const skyline = {
  ...carro,
  modelo: 'Skyline',
  acelerar: function () {
    this.velocidade = 100
  },
  trocarCor: function (novaCor) {
    this.cor = novaCor
  }
}

console.log(skyline)
skyline.acelerar()
console.log(skyline)

skyline.trocarCor('vermelho')
console.log(skyline)















