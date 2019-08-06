/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

const DisplayState: React.FunctionComponent<{ props: any }> = ({ props }) => (
  <div
    sx={{
      my: 3,
      textAlign: "left",
      fontFamily: "monospace",
    }}
  >
    <h3
      sx={{
        p: 1,
        px: 2,
        backgroundColor: "#000",
        color: "white",
        fontSize: "0.65rem",
        fontFamily: "body",
        textTransform: "uppercase",
      }}
    >
      Profile State
    </h3>
    <pre
      sx={{
        backgroundColor: "muted",
        fontSize: 0,
        padding: 1,
        overflowX: "auto",
      }}
    >
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export default DisplayState;
