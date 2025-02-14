let filmArray: (number | string | boolean)[] = [1, 'Guerra civil', true];
let filmTuple: [number, string, boolean] = [
  2,
  'Um Lugar SIlencioso: Dia um',
  false,
];

let filmTupleOpcional: [number, string, boolean?] = [
  2,
  'Um Lugar SIlencioso: Dia um',
];

const [id, title, avaliable] = filmTuple;

console.log(id);
