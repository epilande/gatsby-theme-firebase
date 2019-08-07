/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";
import { googleProvider, githubProvider } from "../firebase/auth";
// import SocialLoginButton from "./SocialLoginButton";
import Button from "./Button";

const SocialLogins: React.FunctionComponent<{
  onSuccess?: () => void;
}> = ({ onSuccess = () => {}, ...restProps }) => {
  return (
    <div sx={{ display: "flex", flexDirection: "column" }} {...restProps}>
      <Button
        sx={{ mb: 1 }}
        onClick={async () => {
          const user = await auth.signInWithPopup(googleProvider());
          console.log("TCL: Google user", user);
          onSuccess();
          navigate("/");
        }}
      >
        Sign in with Google
      </Button>
      <Button
        onClick={async () => {
          const user = await auth.signInWithPopup(githubProvider());
          console.log("TCL: Github user", user);
          onSuccess();
          navigate("/");
        }}
      >
        Sign in with Github
      </Button>
    </div>
  );
};

export default SocialLogins;
