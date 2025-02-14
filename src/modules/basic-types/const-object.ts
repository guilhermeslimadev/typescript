// const file = { name: 'Guilherme', size: 492482832 } as const;

type File = {
  readonly name: string;
  size: number;
};

const file: File = { name: 'Guilherme', size: 492482832 };

//file.name = 'Gjorelding';


export function handleFile(file: File) {
  console.log(`seu nome: ${file.name}`);
  console.log(`seu tamanho: ${file.size}`);
}

handleFile(file);
