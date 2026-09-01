/**
 * Recebe um array de números e retorna a soma de todos os elementos (Sum Array).
 * @param {number[]} arr
 * @returns {number}
 */
function calcularSomatorio(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Esperado um array de números");
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Testes de exemplo
const arrayExemplo = [10, 20.5, 30, -5, 4.5];
console.log("--- Somatório ---");
console.log(`Array: [${arrayExemplo.join(", ")}]`);
console.log(`Soma Total: ${calcularSomatorio(arrayExemplo)}`);

module.exports = { calcularSomatorio };
