export const bootstrap = (): void => {
  /*
  const title: symbol = Symbol('HOME');
  const pageTitle: symbol = Symbol('HOME');

  if (title == pageTitle) {
    console.log('Sim, HOME é igual a HOME');
  }

  */
  const titleSymbol: symbol = Symbol('title');
  const Page = {
    title: 'HOME',
    [titleSymbol]: 'Página principal',
  };

  console.log(Page.title);
  console.log(Page[titleSymbol]);

  console.log(Page);
};
