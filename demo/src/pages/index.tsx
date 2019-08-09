/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Link } from "gatsby";
import { useAuth } from "gatsby-theme-firebase";
import Button from "gatsby-theme-firebase/src/components/Button";
import { Layout, DisplayState } from "../components";
import { Header } from "../components/Styles";
import LoginModal from "../components/LoginModal";

const HomePage = () => {
  const [toggleLogin, setToggleLogin] = React.useState(false);
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} />

      <DisplayState props={profile} />

      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Button
          sx={{
            mr: 3,
            mb: 3,
          }}
          onClick={() => {
            setToggleLogin(true);
          }}
        >
          Login Modal
        </Button>

        <Link
          to="/login"
          sx={{
            mr: 3,
            mb: 3,
          }}
        >
          <Button>Login Page</Button>
        </Link>

        <Link
          to="/social-logins"
          sx={{
            mb: 3,
          }}
        >
          <Button>Social Logins</Button>
        </Link>
      </div>

      {toggleLogin && <LoginModal setToggleLogin={setToggleLogin} />}
    </Layout>
  );
};

export default HomePage;
