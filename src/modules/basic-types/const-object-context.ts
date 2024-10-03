/*
const file = {
  name: 'lista_de_funcionarios.txt',
  size: 456123789,
} as const;
*/

type File = {
  readonly name: string;
  size: number;
};

const file: File = {
  name: 'lista_de_funcionarios.txt',
  size: 456123789,
};

//file.name = 'lista_de_dependentes.txt';

export function handleFileUpload(file: File) {
  console.log(`Nome: ${file.name}`);
  console.log(`Tamanho: ${file.size}`);
}

handleFileUpload(file);
