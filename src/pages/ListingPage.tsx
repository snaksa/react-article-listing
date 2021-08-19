import React, {useEffect, useState} from "react";
import {useLanguage} from "../hooks/useLanguage";
import {useArticles} from "../hooks/useArticles";
import Article from "../models/Article";
import LanguageSelector from "../components/LanguageSelector";

export default function ListingPage(): JSX.Element {
    const {lang, setLanguage} = useLanguage();
    const {getArticles} = useArticles();


    const [page, setPage] = useState<number>(1);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        setArticles(getArticles(page));
    }, [page, getArticles])

    return (
        <div>
            <LanguageSelector onChange={(language) => setLanguage(language)}/>
            <div>
                Language: {lang}
            </div>
            {
                articles.map((article) => {
                    return <div>{article.details[lang].title}</div>
                })
            }
        </div>
    );
}