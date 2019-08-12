import { navigate } from "gatsby";
import firebase from "firebase";

export default ({
  user,
  loginRedirectPath,
}: {
  user?: firebase.auth.UserCredential;
  loginRedirectPath: string;
}) => {
  console.info(
    "Shadowing handleLoginSuccess! View example: https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/gatsby-theme-firebase/firebase/auth/handleLoginSuccess.ts",
  );
  console.info(
    "Original handleLoginSuccess handler: https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/firebase/auth/handleLoginSuccess.ts",
  );
  console.log("User: ", user);
  navigate(loginRedirectPath);
};
