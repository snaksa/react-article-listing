import Article from "../models/Article";
import { Languages } from "../enums/Languages";

export interface ArticlesProps {
  getArticles: (page: number) => Article[];
}

export const useArticles = (): ArticlesProps => {
  const getArticles = (page = 1): Article[] => {
    console.log("page", page);
    return [
      {
        id: "1",
        details: {
          [Languages.EN]: {
            title: "Title EN 1",
            content: "Content EN 1",
          },
          [Languages.DE]: {
            title: "Title DE 1",
            content: "Content DE 1",
          },
          [Languages.BG]: {
            title: "Title BG 1",
            content: "Content BG 1",
          },
        },
        date: "2020-02-02 12:12:12",
        isActive: true,
      },
    ];
  };

  return { getArticles };
};
