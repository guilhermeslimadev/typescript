export const bootstrap = (): void => {
  function speakText(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  }

  document.getElementById('play')?.addEventListener('click', () => {
    speakText('Uma string qualquer para ser lida');
  });
};
