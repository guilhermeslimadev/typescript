export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING, // default = 0
    DELIVERED = 'Entregue',
    CANCELED = 'Cancelado',
  }

  console.log(OrderStatus);
  console.log(OrderStatus.CANCELED);
  //console.log(OrderStatus[5575]);

  enum OrderStatus {
    WAITINGFORPAYMENT = 500,
    SENT = 'Enviado',
  }

  function changeOrderStatus(newStatus: OrderStatus): void {
    if (newStatus === OrderStatus.SENT) {
      // ... PARA ENVIAR UM E-MAIL PARA O CLIENTE
      console.log('Novo Status: ', newStatus);
    }
  }

  changeOrderStatus(OrderStatus.SENT);
};
