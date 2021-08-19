import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
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
  const [prevArticle, setPrevArticle] = useState<string>("");
  const [nextArticle, setNextArticle] = useState<string>("");

  useEffect(() => {
    const articleDetails = getArticle(id);
    if (!articleDetails) {
      return;
    }

    setArticle(articleDetails.article);
    setPrevArticle(articleDetails.prev);
    setNextArticle(articleDetails.next);
  }, [id]);

  return (
    <div className="article-page-wrapper">
      {!article && "Article not found"}

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
      <div className="back">
        <hr className="divider" />
        <NavLink className="link navigation" to={`/${language}`}>
          <i className="bi-arrow-left" /> Back to the listing
        </NavLink>
      </div>

      {article && (
        <React.Fragment>
          {prevArticle && (
            <NavLink
              className="navigation"
              to={`/${language}/articles/${prevArticle}`}
            >
              {"<"} Previous
            </NavLink>
          )}
          {prevArticle && nextArticle && " - "}
          {nextArticle && (
            <NavLink
              className="navigation"
              to={`/${language}/articles/${nextArticle}`}
            >
              Next {">"}
            </NavLink>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
