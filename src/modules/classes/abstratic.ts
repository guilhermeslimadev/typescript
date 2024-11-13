export const bootstrap = (): void => {
  // todos os membros da interface são públicos (implicitamente)
  interface VehicleInterface {
    type: string;
    description(): string;
  }
  // Dar forma aos objetos, sem se preocupar com a lógica
  // Não suportam os operadores de visibilidade (public, protected, private)

  abstract class VehicleAbstract {
    //abstract type: string; // implicitamente públicos
    //abstract description(): string;
    constructor(protected readonly type: string) {}
    description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }
  // Podem dar forma aos objetos e também implementar lógicas
  // Quando implementado (atributo ou método), eles suportam os operadores de visibilidade (public, protected, private)

  // Interfaces são implementadas. Podemos N interfaces
  class BicycleWithInterface implements VehicleInterface {
    public readonly type: string;
    constructor(type: string) {
      this.type = type;
    }
    description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }

  const bicycleWithInterface = new BicycleWithInterface('Bicicleta');
  console.log(bicycleWithInterface.description());

  //---

  // Classes abstratas são extendidas.
  class MotorcycleWithAbstract extends VehicleAbstract {
    constructor(type: string) {
      super(type);
    }
    description(): string {
      return `Tipo: ${this.type}`;
    }
  }
  const motorcycleWithAbstract = new MotorcycleWithAbstract('Moto');
  console.log(motorcycleWithAbstract.description());
};
