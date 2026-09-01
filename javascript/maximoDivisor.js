/**
 * Calcula o Máximo Divisor Comum (MDC / GCD) entre dois números inteiros a e b
 * usando o Algoritmo de Euclides.
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number} O maior inteiro que divide a e b
 */
function maximoDivisorComum(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

/**
 * Calcula o MDC de um array de números inteiros.
 * @param {number[]} arr
 * @returns {number}
 */
function mdcArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let resultado = Math.abs(Math.trunc(arr[0]));
  for (let i = 1; i < arr.length; i++) {
    resultado = maximoDivisorComum(resultado, arr[i]);
    if (resultado === 1) break; // O menor MDC possível para inteiros é 1
  }
  return resultado;
}

// Testes de exemplo
console.log("--- Máximo Divisor Comum (MDC / GCD) ---");
console.log("MDC(48, 18):", maximoDivisorComum(48, 18));   // Deve retornar 6
console.log("MDC(100, 25):", maximoDivisorComum(100, 25)); // Deve retornar 25
console.log("MDC(17, 13):", maximoDivisorComum(17, 13));   // Deve retornar 1 (primos entre si)
console.log("MDC do Array [24, 36, 60]:", mdcArray([24, 36, 60])); // Deve retornar 12

module.exports = { maximoDivisorComum, mdcArray };
