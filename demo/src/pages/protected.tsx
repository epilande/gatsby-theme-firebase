/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { auth, useAuth } from "gatsby-theme-firebase";
import { Gallery } from "gatsby-theme-gallery";
import Button from "gatsby-theme-firebase/src/components/Button";
import LoginModal from "../components/LoginModal";
import { Code, CodeBlock, Header, A } from "../components/Styles";
import { Layout } from "../components";

const ProtectedDemo = () => {
  const [toggleLogin, setToggleLogin] = React.useState(false);
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <Header title="Protected Demo" isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <div>
          <p sx={{ mt: 3, mb: 2 }}>Hello {profile!.displayName}.</p>

          <p sx={{ mb: 3 }}>
            This gallery is generated with{" "}
            <A
              href="https://github.com/epilande/gatsby-theme-gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code>{`gatsby-theme-gallery`}</Code>
            </A>
            .
          </p>

          <Gallery />

          <h2 sx={{ mt: 3 }}>Code Sample</h2>

          <CodeBlock
            sx={{ mt: 2, mb: 0 }}
            link={
              "https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/protected.tsx"
            }
            title="protected.tsx"
          >
            {`import { useAuth } from "gatsby-theme-firebase";

const ProtectedPage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Gallery /> : <LoginButton />
}
`}
          </CodeBlock>

          <Link sx={{ display: "inline-block", mt: 3, mr: 3 }} to="/">
            <Button>Back</Button>
          </Link>
          <Button
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <div>
          <p sx={{ my: 3 }}>You must be logged in to see this page.</p>
          <Button
            onClick={() => {
              setToggleLogin(true);
            }}
          >
            Login
          </Button>
        </div>
      )}

      {toggleLogin && <LoginModal setToggleLogin={setToggleLogin} />}
    </Layout>
  );
};

export default ProtectedDemo;
