/** @jsx jsx */
import { jsx, ThemeProvider, Layout } from "theme-ui";
import * as React from "react";
import { Global } from "@emotion/core";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import PasswordResetForm from "../components/PasswordResetForm";
import Header from "../components/Header";
import theme from "../gatsby-plugin-theme-ui";

const Forms = {
  login: LoginForm,
  signup: SignUpForm,
  passwordReset: PasswordResetForm,
};

const LoginPage = () => {
  const [showForm, setShowForm] = React.useState<keyof typeof Forms>("login");
  const Form = Forms[showForm];

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
          },
        }}
      />
      <Layout>
        <div>
          <button
            onClick={() => {
              setShowForm("login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowForm("signup");
            }}
          >
            Sign up
          </button>
        </div>
        <div
          sx={{
            width: "100%",
            maxWidth: "28rem",
            margin: "0 auto",
            boxShadow: "0 0 1.5rem 0 rgba(0,0,0,0.25)",
          }}
        >
          <Header css={{ textAlign: "center" }}>
            <h1>gatsby-theme-firebase</h1>
          </Header>
          <Form />
        </div>

        {showForm === "login" && (
          <div>
            <button
              onClick={() => {
                setShowForm("passwordReset");
              }}
            >
              Forgot your password?
            </button>
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default LoginPage;
