import * as React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginPage = () => {
  return (
    <div>
      <h1>
        <pre>Login</pre>
      </h1>
      <LoginForm />
      <SignUpForm />
    </div>
  );
};

export default LoginPage;
