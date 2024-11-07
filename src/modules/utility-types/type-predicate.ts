export const bootstrap = (): void => {
  interface Article {
    title?: string;
    subtitle?: string;
    description?: string;
    createdAt?: Date;
    public?: boolean;
  }

  const draft: Article = { title: 'Required' };

  draft.subtitle = 'Propriedades obrigatórias';
  //draft.description = 'Descrição';
  draft.createdAt = new Date('2024-11-07');
  draft.public = false;

  if (isCompleteArticle(draft)) {
    publishArticle(draft);
  } else {
    console.log('O artigo não está completo!');
  }

  function publishArticle(article: Required<Article>): void {
    console.log('Completo: ', article);
  }

  function isCompleteArticle(article: Article): article is Required<Article> {
    return (
      article.title !== undefined &&
      article.subtitle !== undefined &&
      article.description !== undefined &&
      article.createdAt !== undefined &&
      article.public !== undefined
    );
  }
};
