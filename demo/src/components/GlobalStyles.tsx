import * as React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
            "Helvetica Neue", "Arial", "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
          letter-spacing: 0.1px;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
};

export default GlobalStyles;
