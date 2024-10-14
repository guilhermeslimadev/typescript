export const bootstrap = (): void => {
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    departament: string;
  };

  type Customer = {
    wishlist: string[];
  };

  type EmployeeDetails = Person & Employee;

  const employee: EmployeeDetails = {
    name: 'Jorge',
    age: 35,
    departament: 'TI',
  };

  type CustomerDetails = Person & Customer;

  const customer: CustomerDetails = {
    name: 'Maria',
    age: 28,
    wishlist: ['Smartphone', 'Laptop', 'Headphones'],
  };
};
