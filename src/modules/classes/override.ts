export const bootstrap = (): void => {
  class PaymentMethod {
    processPayment(amount: number): void {
      console.log(`Processamento genérico de R$ ${amount.toFixed(2)}`);
    }
  }

  class CreditCardPayment extends PaymentMethod {
    override processPayment(amount: number): void {
      console.log(
        `Processamento com Cartão de Crédito de R$ ${amount.toFixed(2)}`,
      );
    }
  }

  class PayPalPayment extends PaymentMethod {
    override processPayment(amount: number): void {
      console.log(`Processamento com PayPal de R$ ${amount.toFixed(2)}`);
    }
  }

  const payment1 = new PaymentMethod();
  const payment2 = new CreditCardPayment();
  const payment3 = new PayPalPayment();

  payment1.processPayment(100);
  payment2.processPayment(150);
  payment3.processPayment(200);
};
