/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const Header: React.FunctionComponent<{}> = ({ ...restProps }) => {
  return (
    <div
      sx={{
        m: 0,
        p: 3,
        bg: "white",
        color: "primary",
        border: 0,
      }}
      {...restProps}
    />
  );
};

export default Header;
