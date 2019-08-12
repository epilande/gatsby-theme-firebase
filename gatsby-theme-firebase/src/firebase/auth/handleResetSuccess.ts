import { navigate } from "gatsby";

export default ({ loginRedirectPath }: { loginRedirectPath: string }) => {
  navigate(loginRedirectPath);
};
