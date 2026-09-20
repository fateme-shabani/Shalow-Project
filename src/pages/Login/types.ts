export type LoginType = "phone" | "otp";

export interface LoginFormProps {
  onSubmit: (phoneNumber: string) => void;
}

export interface LoginFormValues {
  phoneNumber: string;
}
