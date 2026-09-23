import React, { useState } from "react";

import type { LoginType } from "../types";
import LoginForm from "../LoginForm";
import OtpForm from "../OtpForm";

const Login = () => {
  const [step, setStep] = useState<LoginType>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone);

    //service call for send phone number to backend

    setStep("otp");
  };

//   const handleOtpSubmited = () => {
//     //service call otp verify
//   };

//   const handleChangePhoneNumber = () => {
//     setPhoneNumber("phone");
//   };
  return <>{step === "phone" ? <LoginForm onSubmit={handlePhoneSubmit} /> : <OtpForm />}</>;
};

export default Login;
