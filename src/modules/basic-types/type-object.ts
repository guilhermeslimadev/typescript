let programmer = {
  name: 'Guilherme',
  age: 16,
  skills: ['JavaScript', 'TypeScript', 'React'],
};

export function showProgrammer(programmer: {
  name: string;
  age: number;
  skills: string[];
}) {
  console.log(programmer);
}
showProgrammer(programmer);
showProgrammer({ name: 'Gustavo', age: 19, skills: ['HTML'] });
