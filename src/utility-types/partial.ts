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
    title: 'Título do artigo',
  };

  draft.subtitle = 'Subtitulo do artigo';

  console.log(draft);
};
