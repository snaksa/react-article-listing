import React, { useEffect, useState } from "react";
import { useArticles } from "../hooks/useArticles";
import Article from "../models/Article";
import LanguageSelector from "../components/LanguageSelector";
import { useHistory } from "react-router-dom";
import { Languages } from "../enums/Languages";
import { useLanguage } from "../hooks/useLanguage";

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
    <div>
      <LanguageSelector onChange={onLanguageChange} language={language} />
      <div>Language: {language}</div>
      {articles.map((article) => {
        return <div key={article.id}>{article.details[language].title}</div>;
      })}
    </div>
  );
}
