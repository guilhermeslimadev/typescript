export const bootstrap = (): void => {
  interface Game {
    id: number;
    title: string;
    genre: string;
    year: number;
  }

  // Type Predicate
  function isGameArray(data: any): data is Game[] {
    return (
      Array.isArray(data) &&
      data.every(
        (item) =>
          typeof item.id === 'number' &&
          typeof item.title === 'string' &&
          typeof item.genre === 'string' &&
          typeof item.year === 'number',
      )
    );
  }

  fetch('https://argus-academy.com/mock/api/games/')
    .then((response) => {
      if (!response.ok) {
        console.error(
          'Error HTTP: ',
          `${response.status} - ${response.statusText}`,
        );
      }

      // Type Assertion
      // return response.json() as Promise<Array<Game>>;
      return response.json();
    })
    .then((data) => {
      if (isGameArray(data)) {
        //console.log(data);
      } else {
        console.error('Tipo de dado inesperado!');
      }
    });

  // ---

  interface Car {
    id: number;
    brand: string;
    model: string;
    type: string;
    year: number;
  }

  // Type Predicate
  function isCarArray(data: any): data is Car[] {
    return (
      Array.isArray(data) &&
      data.every(
        (item) =>
          typeof item.id === 'number' &&
          typeof item.brand === 'string' &&
          typeof item.model === 'string' &&
          typeof item.type === 'string' &&
          typeof item.year === 'number',
      )
    );
  }

  fetch('https://argus-academy.com/mock/api/cars/')
    .then((response) => {
      if (!response.ok) {
        console.error(
          'Error HTTP: ',
          `${response.status} - ${response.statusText}`,
        );
      }

      // Type Assertion
      // return response.json() as Promise<Array<Game>>;
      return response.json();
    })
    .then((data) => {
      if (isCarArray(data)) {
        console.log(data);
      } else {
        console.error('Tipo de dado inesperado!');
      }
    });
};
