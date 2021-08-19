import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useArticles } from "../../hooks/useArticles";
import { useLanguage } from "../../hooks/useLanguage";
import Article from "../../models/Article";
import { Languages } from "../../enums/Languages";
import LanguageSelector from "../../components/LanguageSelector";
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import "./style.scss";

export default function ListingPage(): JSX.Element {
  const history = useHistory();
  const language = useLanguage();
  const { getArticles } = useArticles();

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const onLanguageChange = (language: Languages) => {
    history.push(`/${language}`);
  };

  return (
    <div className="listing-page-wrapper">
      <LanguageSelector onChange={onLanguageChange} language={language} />
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
