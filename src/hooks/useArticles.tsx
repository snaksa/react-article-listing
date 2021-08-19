import Article from "../models/Article";

export interface ArticlesProps {
  getArticles: () => Article[];
  getArticle: (id: string) => Article | null;
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

  const getArticle = (id: string, active = true): Article | null => {
    for (const article of getArticles(active)) {
      if (article.id === id) {
        return article;
      }
    }

    return null;
  };

  return { getArticles, getArticle };
};
