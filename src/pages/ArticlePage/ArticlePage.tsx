import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useArticles } from "../../hooks/useArticles";
import { useLanguage } from "../../hooks/useLanguage";
import Article from "../../models/Article";
import { DateTime } from "luxon";
import "./style.scss";

export default function ArticlePage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const language = useLanguage();
  const { getArticle } = useArticles();

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticle(getArticle(id));
  }, [id]);

  return (
    <div className="article-page-wrapper">
      {article && (
        <React.Fragment>
          <div className="details">Article Details</div>
          <div className="title">{article.details[language].title}</div>
          <div className="content">{article.details[language].content}</div>
          <div className="date">
            {DateTime.fromMillis(article.date).toFormat("MMMM dd, yyyy")}
          </div>
        </React.Fragment>
      )}

      {!article && "Article not found"}
    </div>
  );
}
