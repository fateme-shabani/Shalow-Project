import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "../../components/Typography";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-gray-100 h-screen w-full relative p-5">
      <div className="flex flex-col w-lg h-[544px] rounded-3xl shadow-2xl p-4 bg-red-200">
        <Typography weight="bold" size="xl" className="pb-4">
          {t("login.loginByPhone")}
        </Typography>
        <hr className="text-gray-300 h-1" />

        <Typography color="muted" size="md" className="py-4">
          لطفا کد ارسال شده به شماره موبایل X وارد نمایید.
        </Typography>
      </div>
    </div>
  );
};

export default Login;
