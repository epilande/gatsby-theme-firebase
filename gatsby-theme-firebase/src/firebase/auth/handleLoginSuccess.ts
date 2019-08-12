import { navigate } from "gatsby";
import firebase from "firebase";
import { FormStateType } from "../../containers/FormState";

export interface LoginSuccessArgs extends FormStateType {
  user?: firebase.auth.UserCredential;
  loginRedirectPath: string;
}

export default ({ loginRedirectPath }: LoginSuccessArgs) => {
  navigate(loginRedirectPath);
};
