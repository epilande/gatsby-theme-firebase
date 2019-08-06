/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FunctionComponent<Props> = ({ label, sx, ...restProps }) => {
  const defaultInputStyles = {
    width: "100%",
    fontSize: 1,
    mb: 2,
    p: 1,
  };
  return (
    <label css={{ display: "block" }}>
      <p
        sx={{ mt: 0, mb: 1, fontSize: 0, fontWeight: "medium", color: "text" }}
      >
        {label}
      </p>
      <input sx={defaultInputStyles} {...restProps} />
    </label>
  );
};

export default Input;
