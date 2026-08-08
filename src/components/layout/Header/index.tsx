import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-around h-16 bg-gray-100 overflow-hidden rounded-lg">
        <ul>{t("navBar.homePage")}</ul>
        <ul>{t("navBar.profile")}</ul>
        <ul>{t("navBar.address")}</ul>
        <LanguageSwitcher />
      </div>
    </>
  );
}
