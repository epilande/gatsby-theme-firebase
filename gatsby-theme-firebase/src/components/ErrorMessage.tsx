/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const ErrorMessage: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ ...restProps }) => {
  return (
    <div sx={{ p: 3, backgroundColor: "red", color: "white" }} {...restProps} />
  );
};

export default ErrorMessage;
