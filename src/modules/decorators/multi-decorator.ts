export const bootstrap = (): void => {
  const UserLogin = {
    username: 'jorge',
    permissions: ['User'],
  };

  function RateLimit(limitInMicroseconds: number): MethodDecorator {
    console.log('Decorador RateLimit: ', limitInMicroseconds);
    return <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      console.log(descriptor.value);
      const originalMethod = descriptor.value as () => T;
      let lastExecution = 0; // a última execução

      descriptor.value = function (this: any) {
        const now = Date.now(); // instante atual

        if (now - lastExecution < limitInMicroseconds) {
          console.error(
            `O método ${String(propertyKey)} só pode ser chamado novamente após ${limitInMicroseconds}ms.`,
          );
          descriptor.value = function () {} as T;
        } else {
          lastExecution = now;
          // connecta o contexto da nova função associada ao descriptor.value com o contexto do método original, que está sendo decorado
          return originalMethod.apply(this);
        }
      } as T;

      console.log(descriptor.value);
      return descriptor;
    };
  }

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    console.log('Decorador CheckPermissions');
    return <T>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`,
        );

        descriptor.value = function () {} as T;
      }

      return descriptor;
    };
  }

  class ShoppingCart {
    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }
  }

  const shoppingCart = new ShoppingCart();
  document.getElementById('getItems')?.addEventListener('click', () => {
    shoppingCart.getItems();
  });
};
