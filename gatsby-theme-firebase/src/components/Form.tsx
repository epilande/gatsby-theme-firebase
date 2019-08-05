/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const Form: React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement>
> = ({ css, ...restProps }) => {
  return <form css={css} {...restProps} />;
};

export default Form;
