import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Typography } from "../../../components/Typography";
import type { LoginFormProps, LoginFormValues } from "../types";

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleFormSubmit = (data: LoginFormValues) => {
    onSubmit(data.phoneNumber);
  };

  return (
    <div className="flex flex-col w-lg h-[544px] rounded-3xl shadow-2xl p-4 bg-white">
      <Typography weight="bold" size="xl" className="pb-4">
        {t("login.loginOrRegistration")}
      </Typography>
      <hr className="text-gray-300 h-1" />

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-red-300 h-screen justify-around"
      >
        <Typography color="muted" size="xs" className="py-4">
          شماره موبایل یا ایمیل :
        </Typography>
        <input
          id="phoneNumber"
          type="tel"
          inputMode="numeric"
          placeholder="لطفاً شماره موبایل خود را وارد نمایید."
          {...register("phoneNumber", {
            required: "شماره موبایل الزامی است",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل معتبر نیست",
            },
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
        />
        {errors.phoneNumber && (
          <p className="mt-2 text-xs text-red-500">
            {errors.phoneNumber.message}
          </p>
        )}
        <div className="bg-amber-300">
          <Typography color="muted">
            با ورود و ثبت نام در سایت، شما قوانین و شرایط استفاده از خدمات و
            حریم خصوصی را می‌پذیرید.
          </Typography>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white cursor-pointer rounded-4xl px-7 py-2"
          >
            {t("login.login")}
          </button>
        </div>
      </form>
    </div>
  );
}
