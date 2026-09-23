import { useTranslation } from "react-i18next";
import { Typography } from "../../../components/Typography";
import { useForm } from "react-hook-form";
import type { OtpFormProps, OtpFormValues } from "../types";

export default function OtpForm({
  phoneNumber,
  onSubmit,
  onChangePhone,
}: OtpFormProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>();
  const handleOtpFormSubmit = () => {};
  return (
    <div className="flex h-[544px] w-lg flex-col rounded-3xl bg-white p-4 shadow-2xl">
      <Typography weight="bold" size="xl" className="pb-4">
        {t("login.loginOrRegistration")}
      </Typography>

      <hr className="border-gray-300" />

      <form
        onSubmit={handleSubmit(handleOtpFormSubmit)}
        className="flex flex-1 flex-col"
      >
        <div>
          <Typography color="muted" size="xs" className="py-4">
            شماره موبایل یا ایمیل:
          </Typography>

          <input
            id="phoneNumber"
            type="tel"
            inputMode="numeric"
            placeholder={t("validation.phoneNumberPlaceHolder")}
            {...register("phoneNumber", {
              required: t("validation.requiredPhoneNumber"),
              pattern: {
                value: /^09\d{9}$/,
                message: t("validation.invalidPhoneNumber"),
              },
            })}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />

          {errors.phoneNumber && (
            <Typography size="xs" className="mt-2 text-red-500">
              {errors.phoneNumber.message}
            </Typography>
          )}
        </div>

        <div className="mt-auto">
          <Typography color="muted" size="md" className="p-4 leading-6">
            با ورود و ثبت نام در سایت، شما قوانین و شرایط استفاده از خدمات و
            حریم خصوصی را می‌پذیرید.
          </Typography>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-4xl bg-gray-900 px-7 py-2 text-white"
          >
            {t("login.login")}
          </button>
        </div>
      </form>
    </div>
  );
}
