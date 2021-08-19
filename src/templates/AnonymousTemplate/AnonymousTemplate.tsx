import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Languages } from "../../enums/Languages";
import LanguageSelector from "../../components/LanguageSelector";
import { useLanguage } from "../../hooks/useLanguage";
import "./style.scss";

function AnonymousTemplate({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const history = useHistory();
  const language = useLanguage();
  const { pathname } = useLocation();

  const onLanguageChange = (language: Languages) => {
    // split the current path
    const path = pathname.split("/");

    // replace the language part
    path[1] = language;

    // generate new path
    const newPath = path.join("/");
    history.push(newPath);
  };

  return (
    <div className="anonymous-template-wrapper">
      <LanguageSelector onChange={onLanguageChange} language={language} />
      <div className="heading">Articles listing</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default AnonymousTemplate;
