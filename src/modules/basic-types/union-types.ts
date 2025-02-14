let shoppingCart = [200.65, 120.12, '33.90', '44', 'teste'];

export function totalize(values: (number | string)[]) {
  return values
    .map((value) => (typeof value === 'number' ? value : parseFloat(value))) //converter todos os valores para numeros
    .filter((value) => !isNaN(value))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(totalize(shoppingCart));
