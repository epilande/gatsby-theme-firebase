/** @jsx jsx */
import { jsx, ThemeProvider, Layout } from "theme-ui";
import { Global } from "@emotion/core";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
import handleLoginSuccess from "../firebase/auth/handleLoginSuccess";
import handleSignUpSuccess from "../firebase/auth/handleSignUpSuccess";
import handleResetSuccess from "../firebase/auth/handleResetSuccess";
import FormState from "../containers/FormState";
import Form from "../components/Form";
import theme from "../gatsby-plugin-theme-ui";

const FormWithHandlers = () => {
  const { loginRedirectPath } = useFirebaseConfig();
  const formState = FormState.useContainer();
  return (
    <Form
      onLoginSuccess={user => {
        handleLoginSuccess({ ...formState, user, loginRedirectPath });
      }}
      onSignUpSuccess={user => {
        handleSignUpSuccess({ ...formState, user, loginRedirectPath });
      }}
      onResetSuccess={() => {
        handleResetSuccess({ ...formState, loginRedirectPath });
      }}
    />
  );
};

const LoginPage = () => {
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
      <FormState.Provider>
        <Layout>
          <FormWithHandlers />
        </Layout>
      </FormState.Provider>
    </ThemeProvider>
  );
};

export default LoginPage;
