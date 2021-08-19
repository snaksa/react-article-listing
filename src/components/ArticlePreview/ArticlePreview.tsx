import React from "react";
import { NavLink } from "react-router-dom";
import Article from "../../models/Article";
import { Languages } from "../../enums/Languages";
import { DateTime } from "luxon";
import "./style.scss";

interface ArticlePreviewProps {
  article: Article;
  language: Languages;
}

export default function ArticlePreview({
  article,
  language,
}: ArticlePreviewProps): JSX.Element {
  const content = article.details[language].content.substr(0, 50);
  const showDots = article.details[language].content.length > 50;
  return (
    <div className="article-preview-wrapper">
      <NavLink to={`/${language}/articles/${article.id}`} className="title">
        {article.details[language].title}
      </NavLink>
      <div className="content">
        {content}
        {showDots ? "..." : ""}
      </div>
      <div className="date">
        {DateTime.fromMillis(article.date).toFormat("MMMM dd, yyyy")}
      </div>
    </div>
  );
}
