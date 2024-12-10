export const bootstrap = (): void => {
  const UserLogin = {
    username: 'jorge',
    permissions: ['Guest'],
  };

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    return <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      console.log(descriptor.value);
      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`,
        );

        descriptor.value = function () {} as T;
      }

      console.log(descriptor.value);
      return descriptor;
    };
  }

  class ShoppingCart {
    @CheckPermissions(['User', 'Admin', 'Super User'])
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }

    //@CheckPermissions(['Admin', 'Super User'])
    deleteItem() {
      console.log('Remove um item do carrinho');
    }
  }

  const shoppingCart = new ShoppingCart();
  shoppingCart.getItems();
};
