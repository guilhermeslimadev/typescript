//let product: string = 'Microondas';

let product = 'Microondas';

let price = 449.99;

export function display(product: string, price: number) {
  console.log(product, price.toFixed(2));
}

display(product, price);
