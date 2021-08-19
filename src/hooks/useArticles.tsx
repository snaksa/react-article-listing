import Article from "../models/Article";
import { Languages } from "../enums/Languages";

export interface ArticlesProps {
  getArticles: () => Article[];
  getArticle: (id: string) => Article | null;
}

export const useArticles = (): ArticlesProps => {
  const getArticles = (): Article[] => {
    return [
      {
        id: "1",
        details: {
          [Languages.en]: {
            title: "Title EN 1",
            content:
              "Content EN 1 text text text text text text text text text text text text text text text text text text text text text text text",
          },
          [Languages.de]: {
            title: "Title DE 1",
            content: "Content DE 1",
          },
          [Languages.bg]: {
            title: "Title BG 1",
            content: "Content BG 1",
          },
        },
        date: Date.now(),
        isActive: true,
      },
      {
        id: "2",
        details: {
          [Languages.en]: {
            title: "Title EN 2",
            content: "Content EN 2",
          },
          [Languages.de]: {
            title: "Title DE 2",
            content: "Content DE 2",
          },
          [Languages.bg]: {
            title: "Title BG 2",
            content: "Content BG 2",
          },
        },
        date: Date.now(),
        isActive: true,
      },
    ].filter((article) => article.isActive);
  };

  const getArticle = (id: string): Article | null => {
    for (const article of getArticles()) {
      if (article.id === id) {
        return article;
      }
    }

    return null;
  };

  return { getArticles, getArticle };
};
