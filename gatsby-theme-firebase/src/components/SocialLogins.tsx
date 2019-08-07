/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";
import {
  googleProvider,
  githubProvider,
  twitterProvider,
} from "../firebase/auth";
import SocialLoginButton from "./SocialLoginButton";
import GitHubIcon from "./icons/GitHub";
import GoogleIcon from "./icons/Google";
import TwitterIcon from "./icons/Twitter";

const SocialLogins: React.FunctionComponent<{
  onSuccess?: () => void;
  onError?: (err: any) => void;
}> = ({ onSuccess = () => {}, onError = () => {}, ...restProps }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        "button:not(:last-child)": {
          mb: 1,
        },
      }}
      {...restProps}
    >
      <SocialLoginButton
        onClick={async () => {
          try {
            await auth.signInWithPopup(googleProvider());
            onSuccess();
            navigate("/");
          } catch (err) {
            console.error("Authentication Error: ", err);
            onError(err);
          }
        }}
      >
        <GoogleIcon sx={{ mr: 1 }} size={18} /> Sign in with Google
      </SocialLoginButton>
      <SocialLoginButton
        onClick={async () => {
          try {
            await auth.signInWithPopup(twitterProvider());
            onSuccess();
            navigate("/");
          } catch (err) {
            console.error("Authentication Error: ", err);
            onError(err);
          }
        }}
      >
        <TwitterIcon sx={{ mr: 1 }} size={18} /> Sign in with Twitter
      </SocialLoginButton>
      <SocialLoginButton
        onClick={async () => {
          try {
            await auth.signInWithPopup(githubProvider());
            onSuccess();
            navigate("/");
          } catch (err) {
            console.error("Authentication Error: ", err);
            onError(err);
          }
        }}
      >
        <GitHubIcon sx={{ mr: 1 }} size={18} /> Sign in with Github
      </SocialLoginButton>
    </div>
  );
};

export default SocialLogins;
