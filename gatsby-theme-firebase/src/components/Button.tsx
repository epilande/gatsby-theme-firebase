/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const Button: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ ...restProps }) => {
  return (
    <button
      type="button"
      sx={{
        appearance: "none",
        fontSize: 1,
        fontWeight: "bold",
        m: 0,
        py: 2,
        px: 2,
        color: "white",
        bg: "primary",
        border: 0,
        cursor: "pointer",
      }}
      {...restProps}
    />
  );
};

export default Button;
