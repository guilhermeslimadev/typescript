//TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

const addresses: Address[] = [
  { cep: '12345678', default: false },
  { cep: '00000-002', default: true },
  { cep: '98765432', default: false },
];

const customer: Customer = {
  addresses: addresses,
};

//TODO criar uma variavel do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1, price: 10.99 },
    { id: 2, price: 15.99 },
    { id: 3, price: 20.99 },
  ],
};

//TODO Função do tipo void

export function CalculateTotal(shoppingCart: ShoppingCart): number {
  let total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
  return total;
}

const total = CalculateTotal(shoppingCart);

console.log(`total: R${total.toFixed(2)}`);

export function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.addresses.find((address) => address.default)!;
}

const principaladd = getPrincipalAddress(customer);

if (principaladd !== undefined) {
  console.log(principaladd);
}
