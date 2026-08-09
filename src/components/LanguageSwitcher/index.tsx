import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const languages = [
    { id: "fa", label: t("fa") },
    { id: "en", label: t("en") },
  ];
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    if (lang === i18n.language) return;
    i18n.changeLanguage(lang);
  };

  return (
    <div className="block w-14 h-14 bg-gray-50 rounded-lg text-xs p-2">
      {languages.map((language) => (
        <>
          <button
            key={language.id}
            type="button"
            onClick={() => handleLanguageChange(language.id)}
            disabled={i18n.language === language.id}
            className="z-20 cursor-pointer"
          >
            {language.label}
          </button>
        </>
      ))}
    </div>
  );
}
