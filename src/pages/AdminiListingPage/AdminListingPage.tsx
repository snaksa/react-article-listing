import React, { useEffect, useState } from "react";
import { useArticles } from "../../hooks/useArticles";
import { useLanguage } from "../../hooks/useLanguage";
import Article from "../../models/Article";
import { Table } from "react-bootstrap";
import { DateTime } from "luxon";

export default function AdminListingPage(): JSX.Element {
  const language = useLanguage();
  const { getArticles } = useArticles();

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles(false));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Article Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr key={article.id}>
                <td>
                  {DateTime.fromMillis(article.date).toFormat("dd.MM.yy")}
                </td>
                <td>{article.details[language].title}</td>
                <td>Edit Delete</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
