import { navigate } from "gatsby";
import firebase from "firebase";
import { FormStateType } from "../../containers/FormState";

export interface SignUpSuccessArgs extends FormStateType {
  user?: firebase.User | null;
  loginRedirectPath: string;
}

export default ({ loginRedirectPath }: SignUpSuccessArgs) => {
  navigate(loginRedirectPath);
};
