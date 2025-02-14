//TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
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

export function CalculateTotal(shoppingCart: ShoppingCart): void {
  let total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
  console.log(`Total: R${total.toFixed(2)}`);
}

CalculateTotal(shoppingCart);
