import { Languages } from "../enums/Languages";
import { useParams } from "react-router-dom";

export const useLanguage = (): Languages => {
  const { lang } = useParams<{ lang: string }>();
  return lang as Languages;
};
