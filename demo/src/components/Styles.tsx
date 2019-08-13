/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import * as React from "react";
import { auth } from "gatsby-theme-firebase";
import GithubIcon from "gatsby-theme-firebase/src/components/icons/GitHub";
import Button from "gatsby-theme-firebase/src/components/Button";

export const Code: React.FunctionComponent<{}> = props => (
  <code
    sx={{
      fontSize: "1rem",
      bg: "muted",
      padding: "0.2rem 0.4rem",
    }}
    {...props}
  />
);

export const CodeBlock: React.FunctionComponent<{
  link: string;
  title: string;
}> = ({ link, title, children, ...restProps }) => (
  <div
    sx={{
      my: 3,
      fontFamily: "monospace",
    }}
    {...restProps}
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
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "white",
          textDecoration: "none",
        }}
      >
        {title}
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
      {children}
    </pre>
  </div>
);

export const Header: React.FunctionComponent<{
  title?: string;
  isLoggedIn?: boolean;
}> = ({ title = "Gatsby Theme Firebase", isLoggedIn, ...restProps }) => (
  <div
    sx={{
      mt: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
    {...restProps}
  >
    <h1 sx={{ fontSize: [3, 4, 5] }}>{title}</h1>
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
);

export const A = ({ ...props }) => <Styled.a {...props} />;
