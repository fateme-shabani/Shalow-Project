import { useTranslation } from "react-i18next";

import { Typography } from "../../../components/Typography";

export default function LoginForm() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-lg h-[544px] rounded-3xl shadow-2xl p-4 bg-white">
      <Typography weight="bold" size="xl" className="pb-4">
        {t("login.loginOrRegistration")}
      </Typography>
      <hr className="text-gray-300 h-1" />

      <Typography color="muted" size="xs" className="py-4">
شماره موبایل یا ایمیل :    </Typography>
    </div>
  );
}
