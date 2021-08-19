import Article from "../models/Article";

export interface ArticlesProps {
  getArticles: () => Article[];
  getArticle: (
    id: string
  ) => { article: Article; prev: string; next: string } | null;
}

export const useArticles = (): ArticlesProps => {
  const getArticles = (active = true): Article[] => {
    const articles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );

    if (active) {
      return articles.filter((article) => article.isActive);
    }

    return articles;
  };

  const getArticle = (
    id: string,
    active = true
  ): { article: Article; prev: string; next: string } | null => {
    const articles = getArticles(active);
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        return {
          article: articles[i],
          prev: i > 0 ? articles[i - 1].id : "",
          next: i < articles.length - 1 ? articles[i + 1].id : "",
        };
      }
    }

    return null;
  };

  return { getArticles, getArticle };
};
