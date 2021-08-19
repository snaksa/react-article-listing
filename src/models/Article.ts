import { Languages } from "../enums/Languages";

interface ArticleDetails {
  title: string;
  content: string;
}

type DetailsLanguages = Record<keyof typeof Languages, ArticleDetails>;

export default interface Article {
  id: string;
  details: DetailsLanguages;
  date: string;
  isActive: boolean;
}
