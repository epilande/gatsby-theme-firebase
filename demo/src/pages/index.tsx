/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Link } from "gatsby";
import { auth, useAuth } from "gatsby-theme-firebase";
import GithubIcon from "gatsby-theme-firebase/src/components/icons/GitHub";
import Button from "gatsby-theme-firebase/src/components/Button";
import { Layout, DisplayState } from "../components";
import LoginModal from "../components/LoginModal";

const HomePage = () => {
  const [toggleLogin, setToggleLogin] = React.useState(false);
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <div
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 sx={{ fontSize: [3, 4, 5] }}>Gatsby Theme Firebase</h1>
        <div sx={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://github.com/epilande/gatsby-theme-firebase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={24} />
          </a>
          {isLoggedIn && (
            <Button
              sx={{ ml: 2, fontSize: 0, p: 1 }}
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>

      <DisplayState props={profile} />

      <Button
        sx={{ mr: 3 }}
        onClick={() => {
          setToggleLogin(true);
        }}
      >
        Login Modal
      </Button>

      <Link sx={{ mr: 3 }} to="/login">
        <Button>Login Page</Button>
      </Link>

      <Link to="/social-logins">
        <Button>Social Logins</Button>
      </Link>

      {toggleLogin && <LoginModal setToggleLogin={setToggleLogin} />}
    </Layout>
  );
};

export default HomePage;
