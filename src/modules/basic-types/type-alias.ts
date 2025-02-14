type Salary = number | string;

type Programmer = {
  name: string;
  age: number;
  skills: string[];
  contact: { email: string; phone: string };
  salary: Salary; // pode ser um numero ou uma string representando o salario (ex: 5000, '$5000')
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}
showProgrammer({
  name: 'Guilherme',
  age: 16,
  skills: ['TypeScript, JavaScript, Next'],
  contact: { email: 'guilhermesilvajorel@gmail.com', phone: '11966144965' },
  salary: 'R$6.000',
});
