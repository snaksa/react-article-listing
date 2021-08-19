import React, {createContext, ReactNode, useContext, useState} from "react";
import {Languages} from "../enums/Languages";

export interface LanguageContextProps {
    lang: Languages;
    setLanguage: (lang: Languages) => void;
}

const initialProps: LanguageContextProps = {
    lang: Languages.EN,
    setLanguage: (lang: Languages) => {
        throw new Error("not implemented");
    },
};

export const LanguageContext = createContext<LanguageContextProps>(initialProps);

const LanguageProvider = (props: { children: ReactNode }): JSX.Element => {
    const [lang, setLang] = useState<Languages>(Languages.EN);

    const setLanguage = (language: Languages) => {
        setLang(language);
    };

    const langDataValue = { lang, setLanguage };

    return <LanguageContext.Provider value={langDataValue} {...props} />;
};

export const useLanguage = (): LanguageContextProps => useContext(LanguageContext);

export default LanguageProvider;