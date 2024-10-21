export const bootstrap = (): void => {
  const input = document.querySelector('.inputText') as HTMLInputElement;
  const video = document.querySelector('#promo') as HTMLVideoElement;

  input.addEventListener('click', (event: Event) => {
    console.log('Input clicado');
  });

  console.log('Filho de: ', input.parentNode);
  console.log('Element: ', input.id, input.className, input.tagName);
  console.log('Arrastável: ', input.draggable);
  console.log('Input: ', input.value);
  console.log('Video: ', video.volume);
};
