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

  interface ArticlePreview
    extends Omit<ArticleType, 'subtitle' | 'description'> {}

  type ArticlePreviewType = Omit<Article, 'subtitle' | 'description'>;

  const articlePreview: ArticlePreviewType = {
    title: 'TypeScript: Uma linguagem de programação moderna',
    createdAt: new Date('2025-02-15'),
    public: true,
  };

  console.log(articlePreview);
};
