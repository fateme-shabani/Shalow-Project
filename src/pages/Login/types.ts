export type LoginType = "phone" | "otp";

export interface LoginFormProps {
  onSubmit: (phoneNumber: string) => void;
}

export interface LoginFormValues {
  phoneNumber: string;
}

export interface OtpFormValues {
  otp: string;
}

export interface OtpFormProps {
  phoneNumber: string;
  onSubmit: (otp: string) => void;
  onChangePhone: () => void;
}
