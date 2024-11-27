import { isCarArray, isGameArray } from '../../utils/typePredicates.js';

export const bootstrap = (): void => {
  function fetchData<T>(
    url: string,
    typePredicateCallback: (data: any) => boolean,
  ): Promise<T | null> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error(
            'Error HTTP: ',
            `${response.status} - ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((data) => {
        if (typePredicateCallback(data)) {
          return data as T;
        } else {
          return null;
        }
      });
  }

  const respGames = fetchData<Array<Game>>(
    'https://argus-academy.com/mock/api/games/',
    isGameArray,
  );
  //respGames.then((data) => console.log(data));

  const respCars = fetchData<Array<Car>>(
    'https://argus-academy.com/mock/api/cars/',
    isCarArray,
  );
  respCars.then((data) => console.log(data));
};
