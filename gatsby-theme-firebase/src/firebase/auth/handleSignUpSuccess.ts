import { navigate } from "gatsby";
import firebase from "firebase";

export default ({
  loginRedirectPath,
}: {
  user?: firebase.User | null;
  loginRedirectPath: string;
}) => {
  navigate(loginRedirectPath);
};
