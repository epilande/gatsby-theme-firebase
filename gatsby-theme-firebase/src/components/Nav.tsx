/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import FormState from "../containers/FormState";
import ButtonBase from "./Button";

const Button: React.FunctionComponent<{
  active: boolean;
  onClick: () => void;
}> = ({ active, ...props }) => (
  <ButtonBase
    sx={{
      width: "100%",
      bg: "white",
      color: active ? "primary" : "border",
      borderTop: "1px solid",
      borderBottom: "1px solid",
    }}
    {...props}
  ></ButtonBase>
);

const Nav: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  ...restProps
}) => {
  const { formType, setFormType } = FormState.useContainer();

  return (
    <div sx={{ display: "flex", width: "100%" }} {...restProps}>
      <Button
        active={formType === "login"}
        sx={{
          borderRight: formType === "login" ? "1px solid" : 0,
        }}
        onClick={() => {
          setFormType("login");
        }}
      >
        Log in
      </Button>
      <Button
        active={formType === "signup"}
        sx={{
          borderLeft: formType === "signup" ? "1px solid" : 0,
        }}
        onClick={() => {
          setFormType("signup");
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default Nav;
