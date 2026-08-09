import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../LanguageSwitcher";
import { Link, useLocation } from "react-router";
import { AppIcons } from "../../Icons/AppIcons";

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  const paths = location.pathname.split("'").filter(Boolean);
  const routeLabels: Record<string, string> = {
    address: "Address",
    edit: "Edit",
  };
  const iconLabel = [
    { icon: "mdi-light:bell" },
    { icon: "mdi-light:cart" },
    { icon: "mdi-light:account" },
  ];

  return (
    <>
      <div className="flex items-center justify-between h-16 text-gray-900 overflow-hidden text-sm p-4 bg-gray-50">
        <div className="flex items-center justify-between w-64">
          <Link to="/">{t("navBar.homePage")}</Link>
          <span>
            {" > "}
            <Link to="/">{t("navBar.profile")}</Link>
          </span>

          {paths.map((path, index) => {
            const route = "/" + paths.slice(0, index + 1).join("/");
            return (
              <span key={route}>
                {" > "}

                <Link to={route}>{routeLabels[path] ?? path}</Link>
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-between w-32">
          {iconLabel.map((icon) => {
            return (
              <AppIcons icon={icon.icon} size={24} className="text-primary" />
            );
          })}

          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </>
  );
}
