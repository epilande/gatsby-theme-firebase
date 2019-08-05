import * as React from "react";
import { Link } from "gatsby";
import { auth, useAuth } from "gatsby-theme-firebase";
import { Layout } from "../components";

const HomePage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <h1>
        <pre>Hello, Demo Site</pre>
      </h1>
      {isLoggedIn ? (
        <React.Fragment>
          <p>Hi {profile && profile.email}</p>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/login">Login</Link> <Link to="/sign-up">Sign Up</Link>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default HomePage;
