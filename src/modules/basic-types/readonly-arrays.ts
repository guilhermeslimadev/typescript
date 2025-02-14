//let numbers: readonly number[] = [10, 20, 30, 40, 50, 60];

//let numbers: ReadonlyArray<number> = [10, 20, 30, 40, 50, 60];

let numbers: readonly [number, number, number, number, number, number] = [
  10, 20, 30, 40, 50, 60,
];

//numbers[0] = 100;

let numbersCopy = numbers.map((item) => item * 2);
console.log(numbers);
console.log(numbersCopy);

export default () => {};
