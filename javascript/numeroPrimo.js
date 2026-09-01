/**
 * Verificação de número primo (Prime Number Checker).
 * @param {number} n
 * @returns {boolean}
 */
function ePrimo(n) {
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n <= 1) {
    return false;
  }
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// Testes de exemplo
const numerosTeste = [-5, 0, 1, 2, 3, 4, 17, 20, 29, 97, 100];
console.log("--- Verificação de Número Primo ---");
numerosTeste.forEach(num => {
  console.log(`${num} é primo? -> ${ePrimo(num)}`);
});

module.exports = { ePrimo };
