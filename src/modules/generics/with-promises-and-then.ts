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
        data.forEach((game) => console.log(game.title));
      } else {
        console.error('Tipo de dado inesperado!');
      }
    });
};
