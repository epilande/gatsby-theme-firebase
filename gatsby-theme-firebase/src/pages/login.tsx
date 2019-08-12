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

const LoginPage = () => {
  const { loginRedirectPath } = useFirebaseConfig();
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
          <Form
            onLoginSuccess={user => {
              handleLoginSuccess({ user, loginRedirectPath });
            }}
            onSignUpSuccess={user => {
              handleSignUpSuccess({ user, loginRedirectPath });
            }}
            onResetSuccess={() => {
              handleResetSuccess({ loginRedirectPath });
            }}
          />
        </Layout>
      </FormState.Provider>
    </ThemeProvider>
  );
};

export default LoginPage;
