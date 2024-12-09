export const bootstrap = (): void => {
  type ConstructorFunction = { new (...args: any[]): {} };

  function AddLogMethod(dateFormat: string, className: string, prefix: string) {
    return function <T extends ConstructorFunction>(constructor: T): T {
      constructor.prototype.loggerInfo = function () {
        console.log(
          `${prefix} - ${className} - ${new Date().toLocaleString(dateFormat)} - ${JSON.stringify(this)}`,
        );
      };
      return constructor;
    };
  }

  /*
  function AddLogMethod(dateFormat: string, className: string, prefix: string) {
    return function <T extends ConstructorFunction>(constructor: T): T {
      //console.log('Chegamos no decorador');
      console.log(constructor);

      return class extends constructor {
        loggerInfo = () => {
          console.log(
            `${prefix} - ${className} - ${new Date().toLocaleString(dateFormat)} - ${JSON.stringify(this)}`,
          );
        };
      };
    };
  }
  */
  /*
  @AddLogMethod
  class Product {
    name: string;
    loggerInfo!: () => void;
    constructor(name: string) {
      this.name = name;
    }
  }
  */

  @AddLogMethod('pt-BR', 'Person', '[LOG]')
  class Person {
    name: string;
    age: number;
    //loggerInfo!: () => {}

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person('Jorge', 35);
  console.log(person);
  (person as any).loggerInfo();
};
