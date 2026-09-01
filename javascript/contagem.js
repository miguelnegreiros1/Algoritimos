/**
 * Recebe um array de números e conta quantos números inteiros existem
 * entre o primeiro e o último elemento do array de entrada.
 *
 * @param {number[]} arr
 * @returns {{ contagemIntervalo: number, contagemElementosArray: number }}
 */
function contarInteirosEntrePrimeiroEUltimo(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { contagemIntervalo: 0, contagemElementosArray: 0 };
  }

  const primeiro = arr[0];
  const ultimo = arr[arr.length - 1];

  const inicio = Math.min(primeiro, ultimo);
  const fim = Math.max(primeiro, ultimo);

  // 1. Quantidade de inteiros no intervalo matemático estrito (inicio, fim)
  const minInt = Math.floor(inicio) + 1;
  const maxInt = Math.ceil(fim) - 1;
  const contagemIntervalo = Math.max(0, maxInt - minInt + 1);

  // 2. Quantidade de elementos inteiros presentes dentro do array no intervalo (inicio, fim)
  const contagemElementosArray = arr.filter(
    num => Number.isInteger(num) && num > inicio && num < fim
  ).length;

  return { contagemIntervalo, contagemElementosArray };
}

// Testes de exemplo
const testeArray1 = [2.5, 7, 3, 10, 4.2, 8]; // primeiro: 2.5, último: 8 -> inteiros no intervalo (2.5, 8): 3, 4, 5, 6, 7 (total: 5)
console.log("--- Contagem de Inteiros entre Primeiro e Último ---");
console.log("Array 1:", testeArray1);
console.log("Resultado 1:", contarInteirosEntrePrimeiroEUltimo(testeArray1));

const testeArray2 = [10, 15, 3.5, 2]; // primeiro: 10, último: 2 -> inteiros no intervalo (2, 10): 3, 4, 5, 6, 7, 8, 9 (total: 7)
console.log("Array 2:", testeArray2);
console.log("Resultado 2:", contarInteirosEntrePrimeiroEUltimo(testeArray2));

module.exports = { contarInteirosEntrePrimeiroEUltimo };

// Teste de sincronização com o GitHub3
