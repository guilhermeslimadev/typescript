export const bootstrap = (): void => {
  type Item = {
    id: string; // uuid
    [key: string]: string | null; // index signature
  };

  // fetch para um end-point de uma API
  const response: Item[] = [
    { id: '5gr4a56g4ra5g4r5a', movie: 'Cinderella Man' },
    { id: 'ggra454ga56', song: 'Ideologia' },
    { id: 'htr4htrs48', song: 'Azul da Cor do Mar' },
  ];

  function showItems(items: Item[]): void {
    const body = document.querySelector('body');

    if (body instanceof HTMLBodyElement) {
      items.map((item) => {
        const itemElement = document.createElement('div');

        if ('song' in item) {
          itemElement.textContent = item.song;
          itemElement.style.background = 'seagreen';
        } else if ('movie' in item) {
          itemElement.textContent = item.movie;
          itemElement.style.background = 'cadetblue';
        }

        body.appendChild(itemElement);
      });
    }
  }

  showItems(response);
};
