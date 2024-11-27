import { isCarArray, isGameArray } from '../../utils/typePredicates.js';

export const bootstrap = async (): Promise<void> => {
  async function fetchData<T>(
    url: string,
    typePredicateCallback: (data: any) => boolean,
  ): Promise<T | null> {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error('Error HTTP: ', `${resp.status} - ${resp.statusText}`);
      return null;
    }

    const data = await resp.json();
    return typePredicateCallback(data) ? (data as T) : null;
  }

  const dataCars = await fetchData<Array<Car>>(
    'https://argus-academy.com/mock/api/cars/',
    isCarArray,
  );
  console.log(dataCars);
  console.log(
    'Funções assíncronas são executadas em paralelo até que sejam resolvidas (com sucesso ou rejeição), isso faz com que o fluxo de execução da aplicação não fique aguardando e siga em frente!',
  );
};

// Abordagem utilizando Promises com Then
// -------Promise--------------------------Result--Then-----
//               ----Then------Then--------Result

// Abordagem utilizando Promises com Async Await
// -------Promise--C-----------------------Result--Then----------------------Result--
// Async         -----Promise--------------------------Result--Await--C-C----Result
// Async                     ----Await------Await------Result
