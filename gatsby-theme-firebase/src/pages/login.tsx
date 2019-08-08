/** @jsx jsx */
import { jsx, ThemeProvider, Layout } from "theme-ui";
import { Global } from "@emotion/core";
import { navigate } from "gatsby";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
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
            onSuccess={() => {
              navigate(loginRedirectPath);
            }}
          />
        </Layout>
      </FormState.Provider>
    </ThemeProvider>
  );
};

export default LoginPage;
