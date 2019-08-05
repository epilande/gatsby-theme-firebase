/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FunctionComponent<Props> = ({ label, ...restProps }) => {
  return (
    <label css={{ display: "block" }}>
      {label}
      <br />
      <input {...restProps} />
    </label>
  );
};

export default Input;
