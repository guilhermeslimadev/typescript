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
  draft.description = 'Descrição';
  draft.createdAt = new Date('2024-11-07');
  draft.public = false;

  // type assertion
  // publishArticle(draft as Required<Article>);

  function publishArticle(article: Required<Article>): void {
    console.log('Publicando o artigo: ', article);
  }

  const completeArticle: Required<Article> = {
    title: draft.title ?? '',
    subtitle: draft.subtitle ?? '',
    description: draft.description ?? '',
    createdAt: draft.createdAt ?? new Date(),
    public: draft.public ?? false,
  };

  publishArticle(completeArticle);
  // Article = Article
  // Article != Required<Article>
  //  - title: string | undefined == title: string
  // Required<Article> = Required<Article>
};
