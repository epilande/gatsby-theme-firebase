/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";
import FormState from "../containers/FormState";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import PasswordResetForm from "./PasswordResetForm";
import Nav from "./Nav";
import ErrorMessage from "./ErrorMessage";

export const Forms = {
  login: LoginForm,
  signup: SignUpForm,
  passwordReset: PasswordResetForm,
};

const Form: React.FunctionComponent<{
  onSuccess?: () => void;
}> = ({ onSuccess }) => {
  const siteMetadata = useSiteMetadata();
  const { formType, errorMessage } = FormState.useContainer();
  const FormPresenter = Forms[formType];

  return (
    <div
      sx={{
        width: "100%",
        maxWidth: "28rem",
        margin: "0 auto",
        boxShadow: "0 0 1.5rem 0 rgba(0,0,0,0.25)",
      }}
    >
      <Header css={{ textAlign: "center" }}>
        <h1 sx={{ my: 1 }}>{siteMetadata.title}</h1>
      </Header>
      <Nav />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormPresenter onSuccess={onSuccess} />
    </div>
  );
};

export default Form;
