/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, navigate } from "gatsby";
import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase";
import GithubIcon from "gatsby-theme-firebase/src/components/icons/GitHub";
import Button from "gatsby-theme-firebase/src/components/Button";
import { Layout } from "../components";

const SocialLoginsPage = () => {
  const { isLoading, isLoggedIn } = useAuth();

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
          mb: 4,
        }}
      >
        <h1 sx={{ fontSize: [3, 4, 5] }}>Social Login</h1>
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

      <p sx={{ mb: 2 }}>
        Only want the social login buttons and don{"'"}t need the login form?
      </p>

      <p sx={{ mb: 2 }}>
        Use the{" "}
        <code
          sx={{
            fontSize: "1rem",
            bg: "muted",
            padding: "0.2rem 0.4rem",
          }}
        >{`<SocialLogins />`}</code>{" "}
        component:
      </p>

      <div
        sx={{
          my: 3,
          fontFamily: "monospace",
        }}
      >
        <h3
          sx={{
            p: 1,
            px: 2,
            backgroundColor: "#000",
            fontSize: "0.65rem",
            fontFamily: "body",
          }}
        >
          <a
            href="https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/social-logins.tsx"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              textDecoration: "none",
            }}
          >
            social-logins.tsx
          </a>
        </h3>
        <pre
          sx={{
            backgroundColor: "muted",
            fontSize: 1,
            padding: 2,
            overflow: "auto",
          }}
        >
          {`import { SocialLogins } from "gatsby-theme-firebase";

...

<SocialLogins
  onSuccess={() => {
    navigate("/");
  }}
/>
`}
        </pre>
      </div>

      <h2 sx={{ mb: 3 }}>Demo</h2>

      <div sx={{ maxWidth: "20rem", mb: 3 }}>
        <SocialLogins
          onSuccess={() => {
            navigate("/");
          }}
        />
      </div>

      <Link sx={{ mr: 3 }} to="/">
        <Button>Back</Button>
      </Link>
      <Link sx={{ mr: 3 }} to="/login">
        <Button>Login Page</Button>
      </Link>
    </Layout>
  );
};

export default SocialLoginsPage;
