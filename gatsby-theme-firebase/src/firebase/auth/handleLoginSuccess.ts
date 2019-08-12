import { navigate } from "gatsby";
import firebase from "firebase";

export default ({
  loginRedirectPath,
}: {
  user?: firebase.auth.UserCredential;
  loginRedirectPath: string;
}) => {
  navigate(loginRedirectPath);
};
