import React, { useEffect, useState } from "react";
import { useArticles } from "../hooks/useArticles";
import Article from "../models/Article";
import LanguageSelector from "../components/LanguageSelector";
import { useHistory, useParams } from "react-router-dom";
import { Languages } from "../enums/Languages";
import { useLanguage } from "../hooks/useLanguage";

export default function ArticlePage(): JSX.Element {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const language = useLanguage();
  const { getArticle } = useArticles();

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticle(getArticle(id));
  }, [id]);

  const onLanguageChange = (language: Languages) => {
    history.push(`/${language}/articles/${id}`);
  };

  return (
    <div>
      <LanguageSelector onChange={onLanguageChange} language={language} />
      <div>Language: {language}</div>
      {article ? article.details[language].title : "Article not found"}
    </div>
  );
}
