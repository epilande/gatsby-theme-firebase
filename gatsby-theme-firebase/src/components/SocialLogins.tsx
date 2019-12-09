/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
import { auth } from "../firebase";
import {
  googleProvider,
  githubProvider,
  twitterProvider,
  facebookProvider,
} from "../firebase/auth";
import SocialLoginButton from "./SocialLoginButton";
import GitHubIcon from "./icons/GitHub";
import GoogleIcon from "./icons/Google";
import TwitterIcon from "./icons/Twitter";
import FacebookIcon from "./icons/Facebook";

const SocialLogins: React.FunctionComponent<{
  onSuccess?: (user?: firebase.auth.UserCredential) => void;
  onError?: (err: any) => void;
}> = ({ onSuccess = () => {}, onError = () => {}, ...restProps }) => {
  const { socialLogins } = useFirebaseConfig();
  const enableGoogle = socialLogins.includes("google");
  const enableTwitter = socialLogins.includes("twitter");
  const enableGitHub = socialLogins.includes("github");
  const enableFacebook = socialLogins.includes("facebook");

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
              const user = await auth.signInWithPopup(googleProvider());
              onSuccess(user);
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
              const user = await auth.signInWithPopup(twitterProvider());
              onSuccess(user);
            } catch (err) {
              console.error("Authentication Error: ", err);
              onError(err);
            }
          }}
        >
          <TwitterIcon sx={{ mr: 1 }} size={18} /> Sign in with Twitter
        </SocialLoginButton>
      )}
      {enableFacebook && (
        <SocialLoginButton
          onClick={async () => {
            try {
              const user = await auth.signInWithPopup(facebookProvider());
              onSuccess(user);
            } catch (err) {
              console.error("Authentication Error: ", err);
              onError(err);
            }
          }}
        >
          <FacebookIcon sx={{ mr: 1 }} size={18} /> Sign in with Facebook
        </SocialLoginButton>
      )}
      {enableGitHub && (
        <SocialLoginButton
          onClick={async () => {
            try {
              const user = await auth.signInWithPopup(githubProvider());
              onSuccess(user);
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
