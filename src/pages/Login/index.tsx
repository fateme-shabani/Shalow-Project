import React from "react";

import Login from "./Login";
import LoginIllustration from "./LoginIllustration";

const LoginPage = () => {
  return (
    <div className="flex bg-gray-100 h-screen w-full relative p-5">
      <Login />
      <LoginIllustration />
    </div>
  );
};

export default LoginPage;
