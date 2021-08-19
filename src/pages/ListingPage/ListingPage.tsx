import React, { useEffect, useState } from "react";
import { useArticles } from "../../hooks/useArticles";
import { useLanguage } from "../../hooks/useLanguage";
import Article from "../../models/Article";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import "./style.scss";

export default function ListingPage(): JSX.Element {
  const language = useLanguage();
  const { getArticles } = useArticles();

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <ArticlePreview
            key={article.id}
            article={article}
            language={language}
          />
        );
      })}
    </div>
  );
}
