/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Button from "./Button";

const SocialLoginButton: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ ...restProps }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "text",
        background: "white",
        border: "1px solid",
        p: "0.8rem",
      }}
      {...restProps}
    />
  );
};

export default SocialLoginButton;
