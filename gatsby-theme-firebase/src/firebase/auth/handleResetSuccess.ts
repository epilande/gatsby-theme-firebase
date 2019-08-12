import { FormStateType } from "../../containers/FormState";

export interface ResetSuccessArgs extends FormStateType {
  loginRedirectPath: string;
}

export default ({ setFormType }: ResetSuccessArgs) => {
  setFormType("login");
};
