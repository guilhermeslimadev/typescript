export function handleFile(file: any) {
  console.log(`seu nome: ${file.name}`);
}

const file = { name: 'Guilherme' };

handleFile(file);
