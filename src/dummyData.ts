import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import Article from "./models/Article";
import { Languages } from "./enums/Languages";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const getDummyArticles = (): Article[] => {
  const articles: Article[] = [];
  for (let i = 1; i <= 10; i++) {
    articles.push({
      id: uuidv4(),
      date: DateTime.now().minus({ days: i }).toMillis(),
      isActive: Math.round(Math.random()) === 1,
      details: {
        [Languages.en]: {
          title: `[EN] Article ${i}`,
          content: `[EN] Content ${i} ${content}`,
        },
        [Languages.de]: {
          title: `[DE] Article ${i}`,
          content: `[DE] Content ${i} ${content}`,
        },
        [Languages.bg]: {
          title: `[BG] Article ${i}`,
          content: `[BG] Content ${i} ${content}`,
        },
      },
    });
  }

  return articles;
};

export default getDummyArticles;
