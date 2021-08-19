export enum Languages {
  en = "en",
  de = "de",
  bg = "bg",
}

export const translateLanguage = (language: Languages): string => {
  switch (language) {
    case Languages.bg:
      return "Bulgarian";
    case Languages.de:
      return "German";
    default:
      return "English";
  }
};
