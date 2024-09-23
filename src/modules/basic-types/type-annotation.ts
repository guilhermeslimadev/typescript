//let product: string = 'Micro-ondas'
let product = 'Micro-ondas';
let price = 647.52;

export function display(product: string, price: number) {
  console.log(product.toUpperCase(), price.toFixed(0));
}

display(product, price);
