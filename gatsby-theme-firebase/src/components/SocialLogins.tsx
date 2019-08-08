/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
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
  const { socialLogins } = useFirebaseConfig();
  const enableGoogle = socialLogins.includes("google");
  const enableTwitter = socialLogins.includes("twitter");
  const enableGitHub = socialLogins.includes("github");

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
      {enableGoogle && (
        <SocialLoginButton
          onClick={async () => {
            try {
              await auth.signInWithPopup(googleProvider());
              onSuccess();
            } catch (err) {
              console.error("Authentication Error: ", err);
              onError(err);
            }
          }}
        >
          <GoogleIcon sx={{ mr: 1 }} size={18} /> Sign in with Google
        </SocialLoginButton>
      )}
      {enableTwitter && (
        <SocialLoginButton
          onClick={async () => {
            try {
              await auth.signInWithPopup(twitterProvider());
              onSuccess();
            } catch (err) {
              console.error("Authentication Error: ", err);
              onError(err);
            }
          }}
        >
          <TwitterIcon sx={{ mr: 1 }} size={18} /> Sign in with Twitter
        </SocialLoginButton>
      )}
      {enableGitHub && (
        <SocialLoginButton
          onClick={async () => {
            try {
              await auth.signInWithPopup(githubProvider());
              onSuccess();
            } catch (err) {
              console.error("Authentication Error: ", err);
              onError(err);
            }
          }}
        >
          <GitHubIcon sx={{ mr: 1 }} size={18} /> Sign in with Github
        </SocialLoginButton>
      )}
    </div>
  );
};

export default SocialLogins;
