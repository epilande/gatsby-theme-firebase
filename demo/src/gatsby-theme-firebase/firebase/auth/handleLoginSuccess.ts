import { navigate } from "gatsby";
import { LoginSuccessArgs } from "gatsby-theme-firebase/src/firebase/auth/handleLoginSuccess";

export default ({ user, loginRedirectPath }: LoginSuccessArgs) => {
  console.log(
    "%cShadowing handleLoginSuccess!%c View example: https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/gatsby-theme-firebase/firebase/auth/handleLoginSuccess.ts",
    "font-weight: bold; color: #eee; background: #3273DC; padding: 2px 5px;",
    "",
  );
  console.log(
    "Original handleLoginSuccess handler: https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/firebase/auth/handleLoginSuccess.ts",
  );
  console.log("User: ", user);
  navigate(loginRedirectPath);
};
