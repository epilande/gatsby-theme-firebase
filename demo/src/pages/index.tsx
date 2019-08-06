/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import { Link } from "gatsby";
import { auth, useAuth, theme } from "gatsby-theme-firebase";
import Button from "gatsby-theme-firebase/src/components/Button";
import { Layout, DisplayState } from "../components";

const HomePage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1 sx={{ mt: 2 }}>Hello, Demo Site</h1>

        <DisplayState props={profile} />

        {isLoggedIn ? (
          <Button
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default HomePage;
