/**
 * Ordena um array de números utilizando o algoritmo Quicksort.
 * @param {number[]} arr
 * @returns {number[]} Novo array ordenado
 */
function quicksort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Esperado um array de números");
  }
  if (arr.length <= 1) {
    return [...arr];
  }

  const pivo = arr[Math.floor(arr.length / 2)];
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const item of arr) {
    if (item < pivo) {
      menores.push(item);
    } else if (item === pivo) {
      iguais.push(item);
    } else {
      maiores.push(item);
    }
  }

  return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

// Testes de exemplo
const desordenado = [34, 7, 23, 32, 5, 62, 1, 9, 5, 0, -3];
console.log("--- Quicksort ---");
console.log("Array Desordenado:", desordenado);
console.log("Array Ordenado:   ", quicksort(desordenado));

module.exports = { quicksort };
