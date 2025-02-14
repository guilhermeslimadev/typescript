let films = ['Duna: Parte 2', 'Divertida Mente 2'];

//let films: string[] = ['Duna: Parte 2', 'Divertida Mente 2'];
//let numbers: number[] = [20, 30, 40, 50, 60];

//let films: Array<string> = ['Duna: Parte 2', 'Divertida Mente 2'];
//let numbers: Array<number> = [20, 30, 40, 50, 60];

export function toUpperCaseStrings(arr: string[]) {
  return arr.map((value) => value.toUpperCase());
}

console.log(toUpperCaseStrings(films));
