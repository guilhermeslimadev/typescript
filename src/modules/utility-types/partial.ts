export const bootstrap = (): void => {
  interface Article {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  }

  type ArticleType = {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  };

  interface PartialArticle extends Partial<ArticleType> {}
  type PartialArticleType = Partial<Article>;

  let draft: PartialArticleType = {
    title: 'Utilizando o Partial',
  };

  draft.subtitle =
    'Utilize as propriedades opcionais para objetos que irão evoluir no fluxo da aplicação, como por exemplo para formulários multi steps!';

  console.log(draft);
};
