import React from "react";
import { Languages, translateLanguage } from "../enums/Languages";

interface LanguageSelectorProps {
  onChange: (language: Languages) => void;
  language: Languages;
}

export default function LanguageSelector({
  onChange,
  language,
}: LanguageSelectorProps): JSX.Element {
  return (
    <div>
      <select
        value={language}
        onChange={(e) => onChange(e.target.value as Languages)}
      >
        <option value={Languages.en}>{translateLanguage(Languages.en)}</option>
        <option value={Languages.de}>{translateLanguage(Languages.de)}</option>
        <option value={Languages.bg}>{translateLanguage(Languages.bg)}</option>
      </select>
    </div>
  );
}
