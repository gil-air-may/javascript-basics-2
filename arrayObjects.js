// é normal trabalharmos com arrays de objetos
// onde cada objeto representa algo da vida real

// por exemplo, calculando uma fatura de celular
// vamos usar objetos para definir um registro de chamada

const cellphones = {
  origin: '999123098',
  destination: '999123098'
}

let callRecords = []

for (i = 0; i < 10; i++) {
  callRecords = [
    ...callRecords,
    {
      ...cellphones,
      duration: Math.floor((100 - 1) * Math.random())
    }]
}

console.log(callRecords)

const durations = callRecords.map((record) => record.duration)
console.log(durations)

const totalMinutes = durations.reduce((acc, currentValue) => acc + currentValue)
console.log(totalMinutes)

// retorna o custo total em centavos
function totalCost(minutes) {
  const totalCost = minutes * 2

  return `o valor total é ${totalCost} centavos`
}

console.log(totalCost(totalMinutes))





