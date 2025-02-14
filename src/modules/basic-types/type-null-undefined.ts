export const bootstrap = (): void => {
  let title = null;
  console.log('title', title);
  console.log(title ? 'verdadeiro' : 'falso');
  console.log('tipo null', typeof title);

  let subtitle = undefined;
  console.log('sub:', subtitle);
  console.log(subtitle ? 'verdadeiro' : 'falso');

  type Page = {
    title: string;
    subtitle?: string;
    handlerPage?: () => void;
  };
  
  const page: Page = {
    title: 'Home',
    handlerPage: () => console.log('Página Home'),
  };

  console.log('page subtitle:', page.subtitle);
};
