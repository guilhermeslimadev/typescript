export const bootstrap = (): void => {
  function processAndReturn(value: string | number): string | number {
    return value;
  }

  function processAndReturnGerenic<T>(n: T): T {
    return n;
  }

  const y = processAndReturnGerenic(7);
  console.log(y);

  /*
  const x = processAndReturnGerenic('The Big Bang Theory');
  console.log(x.toUpperCase());

  const z = processAndReturnGerenic(true);
  console.log(z);
  */

  /*
  const x = processAndReturn('The Big Bang Theory');
  if (typeof x === 'string') {
    console.log(x.toUpperCase());
  }

  const y = processAndReturn(7);
  if (typeof y === 'number') {
    console.log(y.toFixed(2));
  }
    */
};
