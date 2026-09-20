import React from "react";
import LoginForm from "./LoginForm";
import LoginIllustration from "./LoginIllustration";

const Login = () => {
  return (
    <div className="flex bg-gray-100 h-screen w-full relative p-5">
      <LoginForm />
      <LoginIllustration />
    </div>
  );
};

export default Login;
