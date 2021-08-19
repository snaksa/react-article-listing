import { Languages } from "../enums/Languages";

interface ArticleDetails {
  title: string;
  content: string;
}

export default interface Article {
  id: string;
  details: {
    [Languages.en]: ArticleDetails;
    [Languages.de]: ArticleDetails;
    [Languages.bg]: ArticleDetails;
  };
  date: string;
  isActive: boolean;
}
