// DEFINICION DE VECTOR O ARREGLO
let index = 0 // INDICE O POSICION ALMACENADA EN EL ARREGLO
let value = 'a' // VALOR ALMACENADO EN EL ARREGLO EN EL INDICE INDEX

let vector = []
vector[index] = value
console.log(index)
console.log(value)
console.log(vector)
console.log(vector[0])

// EJEMPLO DE VECTOR
let vector = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]
console.log(vector)
vector[6] = 'g'
console.log(vector)

// ALGUNAS PROPIEDADES DE LOS VECTORES (ver en consola del navegador)
console.log(vector.length)
texto = vector.toString()
console.log(texto)

// ALGUNAS PROPIEDADES DE LOS STRING
nuevoVector = texto.split(',')
console.log(nuevoVector)

// OPERADORES LOGICOS O BOOLEANOS
// Ejemplo DOS (cartas) -> https://www.amazon.es/Mattel-Games-Juego-Cartas-FRM36/dp/B076MMCQWW/ref=asc_df_B076MMCQWW/?tag=googshopes-21&linkCode=df0&hvadid=199015983016&hvpos=&hvnetw=g&hvrand=5206049578358607142&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061048&hvtargid=pla-475844723687&psc=1
// Juego de mesa familiar recomendado a partir de 7 años (Edad recomendada por el fabricante	7 - 10 años)
let jose = {edad: 6}
let alberto = {edad: 7}
let antonio = {edad: 11}

// OPERADOR MAYOR O IGUAL QUE (>=)
function edadRecomendada(edad) {
  if (edad >= 7) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// OPERADOR AND O DE INCLUSION (&&)
function edadRecomendadaFabricante(edad) {
  if (edad >= 7 && edad <= 10) {
    console.log(true)
  } else {
    console.log(false)
  }
}
